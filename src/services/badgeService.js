import BadgeDataLayer from "../dataLayer/BadgeDataLayer";
const createBadgeData = async ({ body }, db) => {
    try {
        const badgeUrl = await generateUniqueBadgeID(body.name, body.timestamp, db);
        let badgeData = {
            name: body.name,
            imageID: body.imageID,
            audioID: body.audioID,
            timestamp: body.timestamp,
            badgeURL: badgeUrl,
            expirationCode: body.expirationCode,
            expirationDate: add90Days(body.timestamp),
            email: body.email
        }
        return badgeData
    } catch{
        return {
            err: {
                "errorMessage": "Invalid request",
                "errorMessageLong": "Data was in incorrect format"
            }
        }
    }

}

const generateUniqueBadgeID = async (name, timestamp, db) => {
    let badgeUrlName = getNamePortionOfBadgeUrl(name);
    let uniqueNum = await getUniqueNum(badgeUrlName, timestamp, db);
    return badgeUrlName + uniqueNum;
}

const getNamePortionOfBadgeUrl = (name) => {
    let badgeUrlName = "";
    let nameSplit = name.split(" ");
    const lettersPerName = Math.ceil(8 / nameSplit.length);
    nameSplit.forEach((el) => {
        badgeUrlName += el.slice(0, lettersPerName)
    });
    return badgeUrlName;
}

const getUniqueNum = async (badgeUrlName, timestamp, db) => {
    let uniqueNum = timestamp % 10000;
    let isUnique = false;
    let badgeData;
    while (!isUnique) {
        uniqueNum = Math.abs(uniqueNum - 1);
        badgeData = await BadgeDataLayer.get(db, badgeUrlName + uniqueNum);
        isUnique = (badgeData.result.length == 0);
    }

    return uniqueNum;
}

const formulateBadgeData = ({ err, result }) => {
    if (err) {
        return { err, result };
    }

    //No badge found with that BadgeURL
    if (result.length == 0) {
        return {
            isValidBadgeURL: false
        }
    } else if (result.length > 1) {
        //TODO really bad error. 
        // There should only be one Badge being returned!! 
    }
    else {
        //TODO check expirationDate with Date(result[0].expirationDate)
        result[0]["isValidBadgeURL"] = true;
        return result[0]
    }
}

const add90Days = (currentTime) => {
    const thirtyDays = 2592000000;
    return currentTime + 3 * thirtyDays;
}


export default {
    createBadgeData,
    formulateBadgeData
}
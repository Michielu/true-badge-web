import BadgeDataLayer from "../dataLayer/BadgeDataLayer";
//TODO test this
const createBadgeData = async ({ body }, db) => {
    const badgeUrl = await generateUniqueBadgeID(body.name, body.time, db);
    let badgeData = {
        name: body.name,
        imageID: body.imageID,
        audioID: body.audioID,
        timestamp: body.time,
        badgeURL: badgeUrl,
        expirationCode: 1
    }
    if (!body.name || !body.audioID || !body.time) {
        badgeData = {
            err: {
                "errorMessage": "Invalid badge data",
                "errorMessageLong": "Name, audioID, or time cannot be undefined"
            }
        }
    }
    return badgeData
}

const generateUniqueBadgeID = async (name, time, db) => {
    let badgeUrlName = getNamePortionOfBadgeUrl(name);
    let uniqueNum = await getUniqueNum(badgeUrlName, time, db);
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

const getUniqueNum = async (badgeUrlName, time, db) => {
    let uniqueNum = time % 10000;
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
        result[0]["isValidBadgeURL"] = true;
        return result[0]
    }
}



export default {
    createBadgeData,
    formulateBadgeData
}
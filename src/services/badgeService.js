//TODO test this
const createBadgeData = ({ body }) => {
    const badgeUrl = generateBadgeID(body.name, body.time);
    let badgeData = {
        name: body.name,
        imageKey: body.imageID,
        audioKey: body.audioID,
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

const generateBadgeID = (name, time) => {
    let badgeUrl = "";
    let nameSplit = name.split(" ");
    const lettersPerName = Math.ceil(8 / nameSplit.length);
    nameSplit.forEach((el) => {
        badgeUrl += el.slice(0, lettersPerName)
    });

    badgeUrl += getUniqueNum(name, time);
    return badgeUrl;
}

//TODO test this. Take this out of this class? Because it'll have db connection
const getUniqueNum = (name, time) => {
    //TODO check with db if badgeUrl is already used
    return time % 10000;
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
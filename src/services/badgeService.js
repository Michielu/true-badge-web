//TODO test this
const createBadgeData = ({ body }) => {
    const badgeUrl = generateBadgeID(body.name, body.time);
    return {
        name: body.name,
        imageKey: body.imageID,
        audioKey: body.audioID,
        timestamp: body.time,
        badgeURL: badgeUrl,
        expirationCode: 1
    }
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

export default {
    createBadgeData
}
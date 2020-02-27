//TODO test this
const generateBadgeID = (name, time) => {
    let badgeUrl = "";
    let nameSplit = name.split(" ");
    const lettersPerName = Math.ceil(8 / nameSplit.length);
    nameSplit.forEach((el) => {
        badgeUrl += el.slice(0, lettersPerName)
    });

    badgeUrl += getUniqueNum(time);
    return badgeUrl;
}

const getUniqueNum = (name, time) => {
    //TODO check with db if badgeUrl is already used
    return time % 10000
}

export default {
    generateBadgeID
}
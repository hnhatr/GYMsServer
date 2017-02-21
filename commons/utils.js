function filterNameWithTags(tags, namestring) {
    if (!tags || !namestring)
        return false;
    var normalize = namestring.toLowerCase();
    for (let tag of tags) {
        if (normalize.indexOf(tag) > -1) {
            return true;
        }
    }
    return false;
}

module.exports = {
    filterNameWithTags
};

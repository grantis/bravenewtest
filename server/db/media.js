const connection = require("./index")

module.exports = {
    getMedia
}

function getMedia(db = connection) {
    dbContent = db("media").select()
    console.log(dbContent)
    return dbContent
}

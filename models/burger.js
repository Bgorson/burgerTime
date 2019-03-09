var orm = require("../config/orm")


var burger = {
    selectAll: orm.selectAll(),
    insert: orm.insertOne(),
    update: orm.updateOne()
}

module.exports= burger
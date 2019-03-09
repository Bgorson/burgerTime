var orm = require("../config/orm")


var burger = {
    selectAll: orm.selectAll(),
    insert: orm.insertOne(),
    update: orm.updateOne(),
    test: orm.test
}

module.exports= burger
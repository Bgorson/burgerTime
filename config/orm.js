var connection = require("../config/connection")

var orm = {
            
    selectAll : function () {
            connection.query("SELECT * FROM burgers")
    
    },
        insertOne : function () {
            connection.query("INSERT INTO burgers (burger_name,devoured) VALUES ('Cheese Burger2', false)")
        }, 

        updateOne : function () {
            connection.query("UPDATE burgers SET devoured=0 WHERE burger_name = 'Cheese Burger'")
        }
    }

module.exports = orm;
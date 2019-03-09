var connection = require("../config/connection")

var orm = {
    test: "test",        
    selectAll : function () {
            return connection.query("SELECT * FROM burgers", function (err, res){
                console.log('returning query')
                console.log(res);
            })
    
    },
        insertOne : function () {
            console.log("adding burger")
            return connection.query("INSERT INTO burgers (burger_name,devoured) VALUES ('Cheese Burger2', false)")
        }, 

        updateOne : function () {
            connection.query("UPDATE burgers SET devoured=0 WHERE burger_name = 'Cheese Burger'")
        }
    }

module.exports = orm;
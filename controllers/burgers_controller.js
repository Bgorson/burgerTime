var express = require('express')
var app = express()
var burger = require("../models/burger.js")

module.exports = function (app) {
    app.get('/',function(req,res){
        res.json(burger.selectAll)
        console.log("hit the get route")
        console.log(burger)
    })
    app.post('/',function(req,res){
        res.json(burger.insert("Mushroom"))
        console.log("hit the post route")    
        
    })
}
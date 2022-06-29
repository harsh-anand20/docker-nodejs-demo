const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.send("Hello World!");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
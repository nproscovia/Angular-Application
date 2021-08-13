const express = require("express");
const mongoose = require('mongoose')
require("dotenv").config();
require("./api/data/db");
const path = require("path")

const router = require("./api/routes");

const app = express();

app.use((req,res, next)=>{
    console.log(req.method, req.url);
    next();
})

app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
app.use(express.static(process.env.PUBLIC_FOLDER));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api", router);

console.log("&&&&")

const server = app.listen(process.env.PORT, function(){
    console.log("listening to port", server.address().port);
})
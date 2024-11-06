const express = require("express");

var data = [];

const app = express();

app.get("/", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    if(JSON.stringify(req.query)!=='{}'){
        let id = data.length;
        data.push({id: id, ...req.query});
    }
    res.json(data);
    res.end();
});

app.listen(5000, function() {
    console.log("http://localhost:5000");
});

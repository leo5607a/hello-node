const express = require("express");

let app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(3001, ()=>{
    console.log("成功");
});
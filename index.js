const express = require("express");
app = express()


app.get("/",async(req,res)=>{
    res.send('hello')
})

app.listen(80, () => console.log("http://localhost:80"));
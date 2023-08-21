const express = require('express')
const app = express()
const port= 3000
const memos= [];
const bodyParser = require("body-parser");
const database = require("./database");
app.use(bodyParser.json());
app.get('/api/memos',async(req,res)=>{
    const result = await database.run("SELECT * FROM memos");
    res.send(result)
});

app.post("/api/memos",async(req,res)=>{
    await database.run(`INSERT INTO memos (content) VALUES('${req.body.content}')`);
    const result = await database.run("SELECT * FROM memos");
    //memos.push(req.body.content)
    // console.log(req.body)
    res.send(result)
})

app.put("/api/memos/:id",async(req,res)=>{
    await database.run(`UPDATE memos SET content '${req.body.content}' WHERE id = ${req.body.id}`);
    const result = await database.run("SELECT * FROM memos");
    //memos[req.params.idx]=req.body.content
    //memos.push(req.body.content)
    // console.log(req.body);
    // console.log(req.params.idx);
    res.send(result);
})
app.listen(port,()=>{
    console.log(`Example app  listening at http://localhost:${port}`)
});
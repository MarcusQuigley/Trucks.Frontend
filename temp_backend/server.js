import express from 'express';
import data from './data'

const app = express();

app.get("/", (req, res)=>{
    var msg = "in root";
    console.log(msg);
    res.send(msg);
})

app.get("/api/trucks", (req, res)=>{
    console.log('in /api/trucks finally');
    res.send(data.trucks);
})

app.listen(5000,()=>{
    console.log("server running at http://localhost:5000");
})
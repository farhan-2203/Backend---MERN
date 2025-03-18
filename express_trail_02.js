let express=require("express");
let app=express();
app.use(express.json());
//In post method using JSON 
app.use(express.json());
app.post("/login",(req,res)=>{
    res.send({status:1,msg:"Login API",data:req.body});
});
//In post method using Query
app.use(express.json());
app.post("/login",(req,res)=>{
    res.send({status:1,msg:"Login API",data:req.query});
});
//In post method using params
app.get("/news/:id",(req,res)=>{
    let currentId=req.params.id;
    res.send(`News API  ${currentId}`);
});
//Another way to give response
app.post("/login",(req,res)=>{
    res.status(200).json({
        status:1,
        msg:"Login API",
        data:req.query
        });
});
app.listen("8000");
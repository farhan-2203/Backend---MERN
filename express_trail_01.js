let express=require("express");
let app=express();
app.get("/",(req,res)=>{
    res.send({status:1,msg:"Home Page API"});
});
app.get("/news",(req,res)=>{
    res.send({status:1,msg:"News API"});
});
app.get("/products",(req,res)=>{
    res.send({status:1,msg:"Products API"});
});
app.listen("8000");
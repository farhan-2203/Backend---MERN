let express=require("express");
let app=express();
app.use(express.json());
let myToken="12345";
let myPass="12345";
let checkToken=(req,res,next)=>{
    if (req.query.token=="" || req.query.token==undefined) {
        return res.send({
            status:0,
            msg:"Fill the Token"
        });
    }
    if (req.query.token!=myToken) {
        return res.send({
            status:0,
            msg:"Please Fill the Correct Token"
        });
    }
    next();
}
app.use(checkToken);
app.use((req,res,next)=>{
    if (req.query.Pass=="" || req.query.Pass==undefined) {
        return res.send({
            status:0,
            msg:"Fill the Password"
        });
    }
    if (req.query.Pass!=myPass) {
        return res.send({
            status:0,
            msg:"Please Fill the Correct Password"
        });
    }
    next();
});
app.get("/news",(req,res)=>{
    res.send({
        status:1,
        msg:"News API"
    });
});
app.listen("8000");
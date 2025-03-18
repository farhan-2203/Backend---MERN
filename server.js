// Create server
let http=require("http");

let server=http.createServer((req,res)=>{
    if (req.url="/news") {
        let obj={
            status:1,
            data:[
                {
                    newsTitle:"Tree",
                    date:"3/18/25"
                },
                {
                    newsTitle:"Planet",
                    date:"3/17/25"
                }
            ]
        }
        res.end(JSON.stringify(obj));
    }
    if (req.url="/homepage") {
        let obj={
            status:1,
            msg:"Welcome!"
        };
        res.end(JSON.stringify(obj));
    }
    if (req.url="/code") {
        let obj={
            status:1,
            code:"093210"
        };
        res.end(JSON.stringify(obj));
    }
});
server.listen("8000");
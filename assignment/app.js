const fs = require("fs");
const http = require("http");


const get_date = new Date();

// current hours
const hrs = get_date.getHours();
 
// current minutes
const mints = get_date.getMinutes();
 
// current seconds
const secds = get_date.getSeconds();
 
// print time in HH:MM:SS
const ans = (`${hrs}:${mints}:${secds}`);


const server = http.createServer((req,res)=>{
    if(req.url === "/"){
       
       
        fs.writeFile(`./Backups/date-test.txt`,ans,(err)=>{
            console.log("Successfully text file created !!!!!")
            res.write("Successfully text file created !!!!!")
            res.end()
        })              
    } 
    else if(req.url === "/retrieve"){

            let ret = fs.readdirSync("E:\\Guvi\\New_Batch\\NODE_DAY 01\\assignment\\Backups")
            console.log(typeof(ret), ret);    
            res.write(JSON.stringify(ret))
            res.end()
    }
    else{
        console.log("page not found")
        res.write("page not found")
        res.end()
    }
    // res.end();
})

server.listen(3000);
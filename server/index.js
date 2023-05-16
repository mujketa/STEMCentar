const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
const cors = require ("cors");

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "mujketa7265",
//     database: "db_zalihe224"
// });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();  
  
  })


app.get("/", (req, res) => {
    res.send("Hello");
})
    






app.listen(5000, () =>{
    console.log("Server is running on port 5000");
})

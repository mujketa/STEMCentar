const express = require('express');
const app = express();
const bodyParser = require ("body-parser");
const mysql = require ("mysql2");
const cors = require ("cors");

const db = mysql.createPool({ //cd C:\Users\pc\Documents\GitHub\STEMCentar\server
    host: "localhost",
    user: "root",
    password: "0000",
    database: "stemcentar"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();  
  })


  app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM vijesti_db";
    db.query(sqlGet, (error, result) =>{
        res.send(result);
    })
})

// app.post("/submit", (req, res) =>{
//     const {naslov, slika, tekst} = req.body;
//     const sqlInsert = "INSERT INTO vijesti_db (naslov, slika, tekst) VALUES (?, ?, ?)";
//     db.query(sqlInsert, [naslov, slika, tekst], (error, result) =>{
//         if (error) {
//             console.log(error);
//         }
//     })

// })


app.post('/post', (req, res) => {
    const formData = {
      naslov: req.body.naslov,
      slika: req.body.slika,
      tekst: req.body.tekst
    };
  
    db.query('INSERT INTO vijesti_db SET ?', formData, (error, results, fields) => {
      if (error) {
        console.error('Error inserting data into MySQL: ' + error.stack);
        return;
      }
      // Handle successful data insertion
      console.log('Data inserted successfully!');
    });
  });

  // app.post('/example', (req, res) => {
  //   res.send(`Full name is:${req.body.naslov} ${req.body.slika} and ${req.body.tekst} .`);
  // });


app.delete("/api/remove/:id", (req, res) =>{
    const {id} = req.params;
    const sqlRemove = "DELETE from vijesti_db where id_vijesti = ?"
    db.query(sqlRemove, id, (error, result) =>{
        if (error) {
            console.log(error);
        }
    })

})

app.put("/api/update/:id", (req, res) => {
    const{id}=req.params;
    const {naslov, slika, tekst} = req.body;
    const sqlUpdate = "UPDATE vijesti_db SET naslov = ?, slika = ?, tekst = ? WHERE id_vijesti = ?";
    db.query(sqlUpdate, [naslov, slika, tekst, id],  (error, result) =>{
        if(error){
            console.log(error);
        }
        res.send(result);
    })  
})


  app.get("/", (req, res) =>{
    const sqlInsert = "INSERT INTO vijesti_db(naslov, slika, tekst) VALUES ('Stem centar organizuje praksu', 'wwww.sdfsdfdsdf.gffdgfd', 'fdgfgfdgfddfgdfgdfgfdgfdgdffdgdffdgfdgfdgdfgfdgdfg')";
    db.query(sqlInsert, (error, result) =>{
        console.log("error", error);
        console.log("result", result);
        res.status(200).json("uspjesno spremljeno u bazu");
    })
})


    






app.listen(5000, () =>{
    console.log("Server is running on port 5000");
})

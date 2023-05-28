const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const port = 8000
const users_collection1 = require('./userdatabase/userdata')
const admins_collection1 = require('./userdatabase/admindata')
const child_collection1 = require('./userdatabase/childdata')
require("./userdatabase/mongoosedb")

const app = express()


app.use(bodyparser.urlencoded(
    {
        extended:true
    })
)

app.use(express.json())

let mainfolder = path.join(__dirname,"../");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
  app.get('/blog',(req,res)=>{
    res.sendFile(mainfolder+"/blog.html")
})
app.get('/about',(req,res)=>{
    res.sendFile(mainfolder+"/about.html")
})
app.get('/loginadmin',(req,res)=>{
    res.sendFile(mainfolder+"/admin.html")
})
app.get('/contact',(req,res)=>{
    res.sendFile(mainfolder+"/contact.html")
})
app.get('/admin',(req,res)=>{
    res.sendFile(mainfolder+"/admin.html")
})
app.get('/userpage',(req,res)=>{
    res.sendFile(mainfolder+"/userpage.html")
})


  // Serve CSS files
  app.use(express.static(path.join(__dirname, '../')));


app.get('/register',(req,res)=>{
    res.sendFile(mainfolder+"/register.html")
})

app.post("/register",(req,res)=>{
    //console.log(req.body);
    let req_userdata = new users_collection1(req.body);
    //console.log(req_userdata);
    req_userdata.save();
    res.redirect('/login');
})

app.get('/login',(req,res)=>{
    res.sendFile(mainfolder+"/login.html")
})

app.post('/login',async(req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
        const username1 = await users_collection1.findOne({Username:username});
        
        if(username1.password == password){
            res.status(201).redirect('/userpage');
        }else{
            res.redirect('/login');
        }
    }catch(error){
        res.status(400).redirect('/login')
    }
})

app.get('/adminregister',(req,res)=>{
    res.sendFile(mainfolder+"/adminregister.html")
})

app.post("/adminregister",(req,res)=>{
    //console.log(req.body);
    let req_admindata = new admins_collection1(req.body);
    //console.log(req_userdata);
    req_admindata.save();
    res.redirect('/admin');
})

app.get('/loginadmin',(req,res)=>{
    res.sendFile(mainfolder+"/admin.html")
})

app.post('/loginadmin',async(req,res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
        const adminname = await admins_collection1.findOne({username:username});
        
        if(adminname.password == password){
            res.status(201).redirect('/childregister');
        }else{
            res.redirect('/login');
        }
    }catch(error){
        res.status(400).redirect('/login')
    }
})

app.get('/childregister',(req,res)=>{
    res.sendFile(mainfolder+"/childregister.html")
})

app.post("/childregister",(req,res)=>{
    //console.log(req.body);
    let req_childdata = new child_collection1(req.body);
    //console.log(req_userdata);
    req_childdata.save();
    res.redirect('/admin');
})


app.get('/childlist',(req,res)=>{

const { MongoClient } = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';

const dbName = 'userdata';

const collectionName = 'child_collection1';

async function fetchDataFromMongoDB() {

  const client = new MongoClient(url);

  try {
    
    await client.connect();

    const db = client.db(dbName);

    const collection = db.collection(collectionName);

    const data = await collection.find().toArray();

    res.send(data);
    //console.log('Fetched data:', data);
  } catch (error) {
    console.error('Error:', error);
  } finally {

    await client.close();
  }
}

// Call the function to fetch data
fetchDataFromMongoDB();

})








app.listen(port,()=>{
    console.log('listening on port 8000');
})
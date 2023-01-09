const express = require('express')
const db =require('./config/db')
const cors = require("cors")
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv').config()
const {Fdbk} = require('./model')
const app =  express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongodb+srv://avrsifdbk:<password>@cluster0.aozwcec.mongodb.net/?retryWrites=true&w=majority
const mongoUri = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log('server is running on port',port)
})
app.post('/fdbck', (req, res) => {
    const bdd = req.body
    const fdb = new Fdbk
    fdb.anonim=bdd.anonim
    fdb.age=bdd.age
    fdb.brand=bdd.brand
    fdb.drugstore=bdd.drugstore
    fdb.contact=bdd.contact
    fdb.message=bdd.message
    fdb.save()

    res.send('Ok');
});
app.get('/', (req, res) => {
    res.send('Hello World, from express');
});
const frrr = mongoose.Schema({
    anonim:{
        type:String,
        trim:true
    },
    age:{},
    brand:{},
    drugstore:{},
    message:{},
    contact:{},
    extra:{}
})
app.get('/all',(req,res)=>{
    const getAll = async()=>{
        const Feedbacks  = mongoose.model('fdbks',frrr)
        try{
            const query = await Feedbacks.find({})
            console.log(query)
            res.send(query)
        }catch(error){
            throw error
        }
    }
     getAll()
})
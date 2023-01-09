const mongoose = require('mongoose')

require('dotenv').config()

const schema = mongoose.Schema({
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
const Fdbk = mongoose.model("Fdbk",schema);
module.exports=({Fdbk})
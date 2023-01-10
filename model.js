const mongoose = require('mongoose')

require('dotenv').config()

const schema = mongoose.Schema({
    anonim:{},
    brandName:{},
    contactInfo:{},
    drugStoreInfo:{},
    formAbout:{},
    howToContact:{},
    message:{},
    userAge:{},
    visitTime:{}
})
const Fdbk = mongoose.model("Fdbk",schema);
module.exports=({Fdbk})
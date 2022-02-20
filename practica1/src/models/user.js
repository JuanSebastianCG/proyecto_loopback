const mongoose = require('mongoose')
const userSchema = mongoose.Schema({

    name:{
        type: String,
        requierd:true
    },

    last_name:{

        type: String,
        requierd:true
    },

    age:{

        type: Number,
        requierd:true

    },
    email:{

        type: String,
        requierd:true
    },



})

module.exports = mongoose.model('user',userSchema)
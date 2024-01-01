const {Schema, model} = require('mongoose')
const { user } = require('../controllers/users')

const UserSchema = new Schema ({

username : {
    type : String,
    required : true,
},

email: {
    type : String,
    requireed : true,
    unique : true
},

password : {
    type : String,
    required : true
}

})


const User = model ('user', UserSchema)
module.exports = User
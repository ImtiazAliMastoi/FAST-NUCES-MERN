const {connect} = require('mongoose')
const UserSchema = require('../Schema/users')
const { hash } = require('bcryptjs')

const user = (req, res) => {
    res.send("Hello  this is " + req.body.name )
  }

  const all_users = (req, res) => {
    res.send("Hello  this is " + req.body.name )
  }

  const login = async(req, res) =>{
    const {email, password} = req.body

    if (email, password) {
      try {
        await connect(process.env.MONGO_URI)
        const checkUser = await UserSchema.exists({email})

        if (checkUser) {
          res.json({ message : "Success"})
          
        } else {
          res.status(404).json({message : "user not found"})
          
        }

      } catch (error) {
        
      }
      
    } else {
      
    }

    if (email && password) {
      
    } else {
      res.status(400).jason("Require field is Missing")
      
    }

    // const db = {
    //   email : 'imastoi71@gmail.com',
    //   password : 'hello1234'
  }

//   if (email == db.email && password == db.password){
//     res.send("Successfull login")
// }
// else {
//     res.send("Incorrect Credentials")
// }


    const signup = async (req, res) =>{ 
       try{
      const {username, email, password} = req.body;
      const db = await connect (process.env.MONGO_URI)
      const create_user = await UserSchema.create({username, email, password})
     res.status(201).json({message : "user created successfully"})
    }
    catch (error){
      res.status(400).send(error.message)
    }
  }






  module.exports = {user, all_users, login, signup}

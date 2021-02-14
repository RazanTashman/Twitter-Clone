
var db = require ("../DB/dataBase")

 exports.signup = (req,res) =>{
   mySql = 'INSERT INTO users (firstName,lastName,email,password,image) VALUES (info.firstName,info.lastName,info.email,info.password,info.image)'
   db.con.query(mySql,(err, result) => {
       if(err)
        status(400).sent("bad req")
            res.sent("donne")
   }) 
}
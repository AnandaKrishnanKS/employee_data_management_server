const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/ems')
// mongoose.connect('mongodb+srv://anandakrishnan1000:1234567890@cluster0.tqujf7c.mongodb.net/')

//model 

const Employee=mongoose.model('Employee',{
    
id:String,
uname:String,
age:Number,
designation:String,
salary:Number,
address:String,
teamNo:Number,
teamId:Number,
phoneNo:Number,
email:String,
image:String
})

module.exports={
    Employee
}
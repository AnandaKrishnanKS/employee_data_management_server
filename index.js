const express = require('express')

const server=express()

//importing data form logic file
const logic=require('./logic')

//conneting server with frontend

const cors= require('cors')

server.use(cors({origin:'http://localhost:3000'}))

//converting data to json

server.use(express.json())

//seting port to run server

server.listen(8000,()=>{
    console.log("server started at port 8000");
})

//when an api request come from view to server

//get all employee details

server.get('/getAllEmployee',(req,res)=>{
    logic.allEmployee().then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//save an empmloyee

server.post('/addEmployee',(req,res)=>{
    logic.addEmployee(
        req.body.id,
        req.body.uname,
        req.body.age,
        req.body.designation,
        req.body.salary,
        req.body.address).then(result=>{
            res.status(result.statusCode).json(result)
        })
})

//delete an employee

server.delete('/deleteEmployee/:id',(req,res)=>{
    logic.removeEmployee(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})


//get an employee
 
server.get('/viewEmployee/:id',(req,res)=>{
    logic.getEmplyee(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//update data of employee

server.post('/editEmployee',(req,res)=>{
    logic.editEmployee(
        req.body.id,
        req.body.uName,
        req.body.age,
        req.body.desig,
        req.body.salary,
        req.body.address
        ).then(result=>{
            res.status(result.statusCode).json(result)
        })
})
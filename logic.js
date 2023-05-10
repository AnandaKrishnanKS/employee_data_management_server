const db = require("./db");

const allEmployee = () => {
  return db.Employee.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        employees: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "data not available",
      };
    }
  });
};

//logic for adding new employee

const addEmployee = (id, uname, age, designation, salary, address,teamNo,teamId, phoneNo,email,image) => {
  return db.Employee.findOne({email}).then((result) => {
    if (result) {
      return {
        statusCode: 401,
        message: "Employee with same data already exists",
      };
    } else {
      //creating new object
      const newEmply = new db.Employee({
        id,
        uname,
        age,
        designation,
        salary,
        address,
        teamNo,
        teamId,
        phoneNo,
        email,
        image
      });

      //to save object in db
      newEmply.save();

      return {
        statusCode: 200,
        message: "New employee added successfully",
      };
    }
  });
};

const removeEmployee=(eid)=>{
  return  db.Employee.deleteOne({id:eid}).then(result=>{
        if(result){
            return{
                statusCode:201,
                message:"Employee has been removed"
            }
        }else{
            return{
                statusCode:402,
                message:"Employee not found"
            }

        }
    })
}

const getEmplyee=(id)=>{
 return db.Employee.findOne({id}).then(result=>{
    if(result){
      return{
        statusCode:201,
        employee:result
      }
    }else{
      return{
        statusCode:401,
        message:"Employee not found"
      }
    }
  })
}

const editEmployee=(id,uname,age,designation,salary,address,teamNo,teamId,phoneNo,email,image)=>{
  return db.Employee.findOne({id}).then(result=>{
    if(result){

      result.id=id
      result.uname=uname
      result.age=age
      result.designation=designation
      result.salary=salary
      result.address=address
      result.teamNo=teamNo
      result.teamId=teamId
      result.phoneNo=phoneNo
      result.email=email
      result.image=image

      result.save()
      
      return{
        statusCode:200,
        message:"employee data updated"
      }
      
    }else{
      return{
        statusCode:402,
        message:"employee not found"
      }
    }
  })
}


module.exports = {
  allEmployee,
  addEmployee,
  removeEmployee,
  getEmplyee,
  editEmployee,
};

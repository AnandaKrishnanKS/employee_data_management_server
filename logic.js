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

const addEmployee = (id, uname, age, designation, salary, address) => {
  return db.Employee.findOne({id}).then((result) => {
    if (result) {
      return {
        statusCode: 401,
        message: "Employee already exists",
      };
    } else {
      //creating new object
      const newEmply = new db.Employee({
        id,
        uname,
        age,
        designation,
        salary,
        address
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

module.exports = {
  allEmployee,
  addEmployee,
  removeEmployee,
};

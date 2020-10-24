const Employee=require('../models/employee');

const employeeControler={};


employeeControler.getEmployees= async (req,res) => {
 const employees = await Employee.find();
 res.json(employees);

}

employeeControler.createEmployee= async (req,res) => {
    const employee = new Employee(req.body);
    console.log(employee);
   await employee.save();
   res.json({
       'status': 'Employee Saved'
   })

}

employeeControler.getEmployee= async (req,res) => {
 const employee = await Employee.findById(req.params.id);
 res.json(employee);
    
}

employeeControler.editEmployee= async (req,res) => {
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office : req.body.office,
        salary: req.body.salary

    };
 await Employee.findByIdAndUpdate(req.params.id, {$set: employee }, {new: true});
    res.json ({status: 'Employee updated'});
}

employeeControler.deleteEmployee= async (req,res) => {
 
    await Employee.findByIdAndRemove(req.params.id);
    res.json ({status: 'Employee deleted'});
    
}

module.exports=employeeControler;
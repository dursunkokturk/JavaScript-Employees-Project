import { Request } from "./requests";
import { UI } from "./ui";

const Form_Secme = document.getElementById("employee-form");
const Name_Input = document.getElementById("name");
const Department_Input = document.getElementById("department");
const Salary_Input = document.getElementById("salary");
const Employees_List = document.getElementById("employees");
const Update_Employee_Button = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");

const ui = new UI();

let Update_State = null;

eventListeners();

function eventListeners(){
    document.addEventListener("DOMContentLoaded",GetAllEmployees);
    form.addEventListener("submit",AddEmployee);
    Employees_List.addEventListener("click",UpdateOrDelete);
    Update_Employee_Button.addEventListener("click",Update_Employee);
}

function GetAllEmployees(){
    request.get()
    .then(employees => {
        ui.AddAllEmployeeToUI(employees);
    })
    .catch(err => console.log(err));
}

function AddEmployee(e){
    
    const Employee_Name = Name_Input.value.trim();
    const Employee_Department = Department_Input.value.trim();
    const Employee_Salary = Salary_Input.value.trim();

    if(Employee_Name === "" || Employee_Department === "" || Employee_Salary === ""){
        alert("Lütfen Tüm Alanları Doldurun");
    }
    else{
        request.post({name:Employee_Name,department:Employee_Department,salary:Number(Employee_Salary)})
        .then(employee => {
            ui.AddEmployeeToUI(employee);
        })
        .catch(err => console.log(err));
    }

    ui.Clear_Inputs();
    e.preventDefault();
}

function UpdateOrDelete(e){
    if(e.target.id === "delete-employee"){
        Delete_Employee(e.target);
    }
    else if(e.target.id === "update-employee"){
        Update_Employee_Controller(e.target.parentElement.parentElement);
    }
}

function Delete_Employee(Target_Employee){
    const id = Target_Employee.parentElement.previousElementSibling.previousElementSibling.textContent;
    request.delete(id)
    .then(Message => {
        ui.DeleteEmployeeFromUI(Target_Employee.parentElement.parentElement)
    })
    .catch(err => console.log(err));
}

function Update_Employee_Controller(Target_Employee){
    ui.Toggle_Update_Button(Target_Employee);

    if(Update_State === null){
        Update_State = {
            Update_Id : Target_Employee.children[3].textContent,
            Update_Parent : Target_Employee
        }
    }
    else{
        Update_State = null;
    }
}

function Update_Employee(){
    if(Update_State){
        const Data = {name:Name_Input.value.trim(),department:Department_Input.value.trim(),salary:Number(Salary_Input.value.trim())};
        request.put(Update_State.Update_Id,Data)
        .then(Updated_Employee => {
            ui.UpdateEmployeeOnUI(Updated_Employee,Update_State.Update_Parent);
            ui.Clear_Inputs();
        })
        .catch(err => console.log(err));
    }
}
/*
request.get()
.then(employees => console.log(employees))
.catch(err => console.log(err));
*/
/*
request.post({name:"Serhat Say",department:"Pazarlama",salary:4000})
.then(employees => console.log(employees))
.catch(err => console.log(err));
*/
/*
request.put(1,{name:"Serhat Say",department:"Bilişim",salary:3000})
.then(employees => console.log(employees))
.catch(err => console.log(err));
*/
/*
request.delete(17)
.then(employees => console.log(employees))
.catch(err => console.log(err));
*/
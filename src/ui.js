export class UI {
    constructor(){
        this.Name_Input = document.getElementById("name");
        this.Department_Input = document.getElementById("department");
        this.Salary_Input = document.getElementById("salary");
        this.Employees_List = document.getElementById("employees");
        this.Update_Employee_Button = document.getElementById("update");
    }

    AddAllEmployeeToUI(employees){
        let result = "";

        employees.forEach(employee => {
           result += `
                <tr>                                 
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.id}</td>
                    <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                    <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
                </tr>
           `; 
        });

        this.Employees_List.innerHTML=result;
        
    }

    Clear_Inputs(){
        this.Name_Input.value = "";
        this.Department_Input.value = "";
        this.Salary_Input.value = "";
    }

    AddEmployeeToUI(employee){
        this.Employees_List.innerHTML +=`
            <tr>                                 
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
        `;
    }

    DeleteEmployeeFromUI(Element){
        Element.remove();
    }

    Toggle_Update_Button(Target){
        if(this.Update_Employee_Button.style.display === "none"){
            this.Update_Employee_Button.style.display = "block";
            this.AddEmployeeInfoToInputs(Target);
        }
        else{
            this.Update_Employee_Button.style.display = "none";
            this.Clear_Inputs();
        }
    }

    AddEmployeeInfoToInputs(Target){
        const children = Target.children;
        this.Name_Input.value = children[0].textContent;
        this.Department_Input.value = children[1].textContent;
        this.Salary_Input.value = children[2].textContent;
    }

    UpdateEmployeeOnUI(employee,Parent){
        Parent.innerHTML =`
            <tr>                                 
                <td>${employee.name}</td>
                <td>${employee.department}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr>
    `;
    }
}
import { Injectable }  from '@angular/core';
import {  HttpClient }  from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    constructor(private http:HttpClient){}
    
    getAllEmployee(){
        //return this.http.get("assets/employee.json");
        return this.empAll;
    }

    empAll:any[]=[
        
        {empId:1001,empName:"vasthav",empSalary:111,empDepartment:"Java"},
        {empId:1002,empName:"chandu",empSalary:111,empDepartment:"Java"},
        {empId:1003,empName:"rohit",empSalary:111,empDepartment:"Java"},



    ];

    addEmployee(data:any){

        this.empAll.push(data);
        return true;
    }



}
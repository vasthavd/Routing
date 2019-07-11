import { Component } from '@angular/core'; 
import { EmployeeService } from './app.employeeservice';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
     selector:'add-comp',
     templateUrl:'addEmployee.html'
})


 export class AddEmployeeComponent{
     myAllData:any
     empId: any;
     empName: any;
     empSalary: any;
     empDepartment: any;

     constructor(private service:EmployeeService,private router:Router){}

     empAll:any[]=[];
     ngOnInit(){
          //this.service.getAllEmployee().subscribe((data:any)=>this.empAll=data);
          return this.service.empAll;
     }
     addData(){
          
          this.myAllData={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
          if(this.service.addEmployee(this.myAllData)){
          this.router.navigate(['show']);
          }
          
          
     }
}
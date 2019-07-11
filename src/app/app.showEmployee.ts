import{Component, OnInit} from '@angular/core';
import { EmployeeService } from './app.employeeservice';

@Component({
    selector:'show-comp',
    templateUrl:'showEmployee.html'
})
export class ShowEmployeeComponent implements OnInit{
    constructor(private service:EmployeeService){}

    empAll:any[]=[];

    ngOnInit(){
        
         this.empAll=this.service.getAllEmployee();
        
        
    }
}
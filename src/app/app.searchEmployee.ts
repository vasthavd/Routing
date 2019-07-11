import{Component,OnInit} from '@angular/core';
import{Routes,Router} from '@angular/router';
import{EmployeeService} from './app.employeeservice';


@Component({
    selector:'search-comp',
    templateUrl:'searchEmployee.html'
})
export class SearchEmployeeComponent{
    empSearch:any;
    empAll:any[]=[];
    empId:any;
    empName:any;
    empSalary:any;
    empDepartment:any;
    Search:any[]=[];

    constructor(private service:EmployeeService,private router:Router){

    }
    ngOnInit(){
        this.empAll=this.service.getAllEmployee();
    }
    searchData(){
        this.Search.splice(0,1);
        for(let data of this.empAll)
        {
            if(data.empId==this.empId)
            {
                this.Search.push(data);
                console.log(data);
            }
        }
    }
}
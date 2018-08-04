import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/empservice.service';

@Component({
    templateUrl: './fetchemployee.component.html'
})

export class FetchEmployeeComponent {
    empList: EmployeeData[]=[];
   

    constructor( public http: Http, private _router: Router, private _employeeService: EmployeeService) {
        this.getEmployees();
    }
    

    getEmployees() {
        this._employeeService.getEmployees().subscribe(
            data => this.empList = data
        )
    }
    delete(id) {
        var ans = confirm("Do you want to delete customer with Id: " + id);
        if (ans) {
            this._employeeService.deleteEmployee(id).subscribe((data) => {
                this.getEmployees();
            }, error => console.error(error))
        }
    }
}
 interface EmployeeData {
    id: number;
    firstName: string;
    lastName: string;
     email: string;
     contactNumber: number;
     address: string;
     userName: string;
     password: string;
     gender: string;
     qualification: string;
     experience: string;
}

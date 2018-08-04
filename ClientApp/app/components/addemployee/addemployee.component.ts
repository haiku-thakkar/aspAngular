import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchEmployeeComponent } from '../fetchemployee/fetchemployee.component';
import { EmployeeService } from '../../services/empservice.service';
@Component({
    templateUrl: './addEmployee.component.html'
})
export class createemployee implements OnInit {
    employeeForm: FormGroup;
    title: string = "Create";
    id: number=0;
    errorMessage: any;
    qualificationList: Array<any> = [];
    experienceList: Array<any> = [];

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _employeeService: EmployeeService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
        this.employeeForm = this._fb.group({
            id: 0,
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required]],
            contactNumber: ['', [Validators.required]],
            address: ['', [Validators.required]],
            userName: ['', [Validators.required]],
            password: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            qualification: ['', [Validators.required]],
            experience: ['', [Validators.required]]
        })
    }
    ngOnInit() {
        this._employeeService.getQualificationList().subscribe(
            data => this.qualificationList = data
        )
        this._employeeService.getExperienceList().subscribe(
            data => this.experienceList = data
        )
        if (this.id > 0) {
            this.title = "Edit";
            this._employeeService.getEmployeeById(this.id)
                .subscribe(resp => this.employeeForm.setValue(resp)
                    , error => this.errorMessage = error);
        }
    }
    save() {
        if (!this.employeeForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._employeeService.saveEmployee(this.employeeForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-employee']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._employeeService.updateEmployee(this.employeeForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-employee']);
                }, error => this.errorMessage = error)
        }
    }
    cancel() {
        this._router.navigate(['/fetch-employee']);
    }
    get firstName() { return this.employeeForm.get('firstName'); }
    get lastName() { return this.employeeForm.get('lastName'); }
    get email() { return this.employeeForm.get('email'); }
    get contactNumber() { return this.employeeForm.get('contactNumber'); }
    get address() { return this.employeeForm.get('address'); }
    get userName() { return this.employeeForm.get('userName'); }
    get password() { return this.employeeForm.get('password'); }
    get gender() { return this.employeeForm.get('gender'); }
    get qualification() { return this.employeeForm.get('qualification'); }
    get experience() { return this.employeeForm.get('experience'); }
   
}
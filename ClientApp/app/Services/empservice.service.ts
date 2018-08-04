﻿import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 

@Injectable()
export class EmployeeService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }
    getQualificationList() {
        return this._http.get(this.myAppUrl + 'api/Employee/GetQualificationList')
            .map(res => res.json())
            .catch(this.errorHandler);
    }

    getExperienceList() {
        return this._http.get(this.myAppUrl + 'api/Employee/GetExperienceList')
            .map(res => res.json())
            .catch(this.errorHandler);
    }

    getEmployees() {
        return this._http.get(this.myAppUrl + 'api/Employee/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    getEmployeeById(id: number) {
        return this._http.get(this.myAppUrl + "api/Employee/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    saveEmployee(employee) {
        return this._http.post(this.myAppUrl + 'api/Employee/Create', employee)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }
    updateEmployee(employee) {
        return this._http.put(this.myAppUrl + 'api/Employee/Edit', employee)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }
    deleteEmployee(id: number) {
        return this._http.delete(this.myAppUrl + "api/Employee/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }  

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }  
}
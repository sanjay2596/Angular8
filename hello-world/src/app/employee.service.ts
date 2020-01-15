import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private _url: string = "/assets/data/employees.json";
  getEmployees(){
    return this.http.get<IEmployee[] >(this._url);

  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmpManagementService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://my-json-server.typicode.com/Jafoor/fack-json-server/employees', data);
  }

  getEmployees(): Observable<any> {
    return this._http.get('https://my-json-server.typicode.com/Jafoor/fack-json-server/employees');
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://my-json-server.typicode.com/Jafoor/fack-json-server/employees/${id}`, data);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`https://my-json-server.typicode.com/Jafoor/fack-json-server/employees/${id}`);
  }
}

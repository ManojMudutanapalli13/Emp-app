import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  id?: number;
  name: string;
  email: string;
}


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:3000/api/employees';
  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee : Employee):Observable<any>{
    return this.http.post(this.apiUrl,employee);
  }

  updateEmployee(index:number,employee : Employee): Observable<any>{
    return this.http.put(`${this.apiUrl}/${index}`,employee);
  }

  deleteEmployee(index:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${index}`);
  }
}

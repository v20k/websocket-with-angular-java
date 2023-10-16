import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  getapiService(id:any){
 return this.http.get(`http://localhost:8080/user?id=${id}`);
  }
}

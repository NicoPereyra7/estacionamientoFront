import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:String = "http://localhost:8080/usuario" 

  constructor(private http:HttpClient) { }

  loginByTelefono(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "/autenticacion"
    return this.http.post<ResponseI>(direccion,form);
  }

  
}

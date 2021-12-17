import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { patenteI } from '../../models/patente.interface';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PatenteService {

  url:String = "http://localhost:8080/patente"

  constructor(private http:HttpClient) { }

  getAll(id:number):Observable<patenteI[]>{
    return this.http.get<patenteI[]>(this.url+'/usuario/'+id);
  }
  
}

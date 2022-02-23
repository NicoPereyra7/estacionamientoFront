import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/jwt-dto.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { UsuarioNuevo } from 'src/app/models/usuario-nuevo';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: String = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) { }

  public crearUsuario(form: UsuarioNuevo): Observable<any> {
    return this.http.post<any>(this.url + '', form);
  }

  public loginByTelefono(form: LoginI): Observable<ResponseI> {
    let direccion = this.url + '/autenticacion';
    return this.http.post<ResponseI>(direccion, form);
  }

  public refresh(token: ResponseI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.url + '/refresh', token);
  }

  public obtenerUsuario(id: number): Observable<UsuarioI> {
    return this.http.get<UsuarioI>(this.url + '/' + id);
  }
}

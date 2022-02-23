import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseI } from 'src/app/models/jwt-dto.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url: String = 'http://localhost:8080/Usuario';

  constructor(private http: HttpClient) { }

  public refresh(token: ResponseI): Observable<ResponseI> {
    return this.http.post<ResponseI>(this.url + '/refresh', token);
  }
}

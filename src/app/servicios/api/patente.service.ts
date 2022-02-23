import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PatenteI } from '../../models/patente.interface';
import { HttpClient } from '@angular/common/http';
import { PatenteNueva } from 'src/app/models/patente-nueva';

@Injectable({
  providedIn: 'root',
})
export class PatenteService {
  url: String = 'http://localhost:8080/patente';

  constructor(private http: HttpClient) { }

  creaPatente(patente: PatenteNueva): Observable<any> {
    return this.http.post<any>(this.url + '', patente);
  }

  editarPatente(id: number, patente: PatenteI): Observable<any> {
    return this.http.put<any>(this.url + '/' + id, patente);
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  getAll(id: number): Observable<PatenteI[]> {
    return this.http.get<PatenteI[]>(this.url + '/usuario/' + id);
  }

  delete(id: number): Observable<PatenteI> {
    return this.http.delete<PatenteI>(this.url + '/' + id);
  }
}

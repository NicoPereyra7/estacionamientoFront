import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estacionamiento } from 'src/app/models/estacionamiento';
import { EstacionamientoActivo } from 'src/app/models/estacionamiento-activo';

@Injectable({
  providedIn: 'root',
})
export class EstacionamientoService {
  url: string = 'http://localhost:8080/estacionamiento';

  constructor(private http: HttpClient) { }

  comenzarEstacionamiento(form: Estacionamiento): Observable<Estacionamiento> {
    return this.http.post<Estacionamiento>(this.url, form);
  }

  estacionamientosActivos(id: number): Observable<EstacionamientoActivo[]> {
    console.log('En Service ' + this.url + '/obtenerActivos/' + id);
    return this.http.get<EstacionamientoActivo[]>(
      this.url + '/obtenerActivos/' + id
    );
  }

  finalizarEstacionamiento(id: number): Observable<void> {
    return this.http.get<void>(this.url + '/finalizar/' + id);
  }
}

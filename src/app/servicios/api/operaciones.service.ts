import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class OperacionesService {
    url: String = 'http://localhost:8080/operacionesCuenta';

    constructor(private http: HttpClient) { }

    listarOperaciones(id: number): Observable<any> {
        return this.http.get<any>(this.url + '/cuentaCorriente/' + id);
    }
}

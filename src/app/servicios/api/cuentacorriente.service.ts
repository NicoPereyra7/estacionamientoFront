import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CuentaCorrienteI } from '../../models/cuentaCorriente.interface';
import { HttpClient } from '@angular/common/http';
import { CuentaCorriente } from 'src/app/models/cuentaCorriente-cargar';

@Injectable({
    providedIn: 'root',
})
export class CuentaCorrienteService {
    url: String = 'http://localhost:8080/cuentaCorriente';

    constructor(private http: HttpClient) { }

    obtenerCuentaPorUsuario(id: number): Observable<CuentaCorrienteI> {
        return this.http.get<CuentaCorrienteI>(this.url + '/usuario/' + id);
    }

    cargarCuentaCorriente(cuenta: CuentaCorriente): Observable<CuentaCorriente> {
        return this.http.put<CuentaCorriente>(this.url + '/cargarSaldo', cuenta);
    }
}

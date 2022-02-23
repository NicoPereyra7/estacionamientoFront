import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CuentaCorriente } from 'src/app/models/cuentaCorriente-cargar';
import { CuentaCorrienteI } from 'src/app/models/cuentaCorriente.interface';
import { OperacionesI } from 'src/app/models/operaciones.interface';
import { CuentaCorrienteService } from 'src/app/servicios/api/cuentacorriente.service';
import { OperacionesService } from 'src/app/servicios/api/operaciones.service';
import { TokenService } from 'src/app/servicios/api/token.service';

@Component({
  selector: 'app-cuentacorriente',
  templateUrl: './cuentacorriente.component.html',
  styleUrls: ['./cuentacorriente.component.scss'],
})
export class CuentacorrienteComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private cuentaCorrienteService: CuentaCorrienteService,
    private tokenService: TokenService,
    private operacionesService: OperacionesService
  ) { }

  saldo!: number;
  idCuenta!: number;
  monto!: number;
  telefono!: number;
  mostrar: boolean = false;
  operaciones!: OperacionesI[];

  ngOnInit(): void {
    this.obtenerCuentaCorriente()
  }

  obtenerCuentaCorriente(): void {
    this.cuentaCorrienteService
      .obtenerCuentaPorUsuario(this.tokenService.getIdUser())
      .subscribe((data: CuentaCorrienteI) => {
        this.saldo = data.saldo;
        this.idCuenta = data.id
      });
  }

  cargarCuentaCorriente(): void {
    const cuenta = new CuentaCorriente(
      this.monto,
      this.telefono
    );
    this.cuentaCorrienteService.cargarCuentaCorriente(cuenta).subscribe({
      next: () => {
        this.toastr.success('', 'Saldo Actualizado', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        window.location.reload();
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      },
    });
  }

  mostrarOperaciones(): void {
    this.operacionesService.listarOperaciones(this.idCuenta).subscribe({
      next: (data) => {
        this.operaciones = data
        this.mostrar = true
        this.toastr.success('', 'Mostrar operaciones', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      },
    });
  }

  ocultarOperaciones(): void {
    this.mostrar = false
  }


}

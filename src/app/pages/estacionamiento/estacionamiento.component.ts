import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Estacionamiento } from 'src/app/models/estacionamiento';
import { EstacionamientoActivo } from 'src/app/models/estacionamiento-activo';
import { PatenteI } from 'src/app/models/patente.interface';
import { UsuarioI } from 'src/app/models/usuario.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { EstacionamientoService } from 'src/app/servicios/api/estacionamiento.service';
import { PatenteService } from 'src/app/servicios/api/patente.service';
import { TokenService } from 'src/app/servicios/api/token.service';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.component.html',
  styleUrls: ['./estacionamiento.component.scss'],
})
export class EstacionamientoComponent implements OnInit {
  estacionamientoForm = new FormGroup({
    patente: new FormControl('', Validators.required),
    usuario: new FormControl(
      this.tokenService.getIdUser(),
      Validators.required
    ),
  });

  constructor(
    private readonly router: Router,
    private estacionamientoService: EstacionamientoService,
    private tokenService: TokenService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private patenteService: PatenteService,
    private apiService: ApiService
  ) { }

  estacionamientos!: EstacionamientoActivo[];
  patentes: PatenteI[] = [];
  activo: boolean = false;
  patente!: PatenteI;
  nuevaPatente!: string;
  usuario_id!: number;
  saldo!: number;

  ngOnInit(): void {
    this.obtenerUsuario();
    this.estacionamientoActivo();
    this.listarPatentes();
  }

  estacionamientoActivo(): void {
    this.estacionamientoService
      .estacionamientosActivos(this.tokenService.getIdUser())
      .subscribe({
        next: (data) => {
          this.estacionamientos = data;
          if (this.estacionamientos.length > 0) {
            this.activo = true;
          }
        },
      });
  }

  listarPatentes(): void {
    this.patenteService
      .getAll(this.tokenService.getIdUser())
      .subscribe((data: PatenteI[]) => {
        this.patentes = data;
      });
  }

  obtenerUsuario(): void {
    this.apiService
      .obtenerUsuario(this.tokenService.getIdUser())
      .subscribe((data: UsuarioI) => {
        this.usuario_id = this.tokenService.getIdUser();
        this.saldo = data.cuentaCorriente.saldo;
        console.log(this.saldo);
        console.log(this.usuario_id);
      });
  }

  finalizarEstacionamiento(id: number): void {
    console.log(id);
    this.estacionamientoService.finalizarEstacionamiento(id).subscribe({
      next: () => {
        this.toastr.success('', 'Estacionamiento iniciado', {
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

  comenzarEstacionamientoNuevaPatente() {
    const estacionamiento = new Estacionamiento(
      this.nuevaPatente,
      this.usuario_id
    );
    this.estacionamientoService
      .comenzarEstacionamiento(estacionamiento)
      .subscribe({
        next: () => {
          this.toastr.success('', 'Estacionamiento iniciado', {
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
  comenzarEstacionamiento() {
    console.log(this.patente.patente);
    const estacionamiento = new Estacionamiento(
      this.patente.patente,
      this.usuario_id
    );
    console.log(this.patente);
    this.estacionamientoService
      .comenzarEstacionamiento(estacionamiento)
      .subscribe({
        next: () => {
          this.toastr.success('', 'Estacionamiento iniciado', {
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
}

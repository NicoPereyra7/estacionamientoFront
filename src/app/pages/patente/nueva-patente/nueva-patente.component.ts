import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatenteNueva } from 'src/app/models/patente-nueva';
import { PatenteService } from 'src/app/servicios/api/patente.service';
import { TokenService } from 'src/app/servicios/api/token.service';

@Component({
  selector: 'app-nueva-patente',
  templateUrl: './nueva-patente.component.html',
  styleUrls: ['./nueva-patente.component.scss'],
})
export class NuevaPatenteComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private patenteService: PatenteService,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) { }

  usuario_id!: number;
  patente!: string;

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(): void {
    this.usuario_id = this.tokenService.getIdUser();
  }

  crearPatente(): void {
    const patente = new PatenteNueva(this.patente, this.usuario_id);
    this.patenteService.creaPatente(patente).subscribe({
      next: (data) => {
        this.toastr.success('', data['mensaje'], {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/patentes']);
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

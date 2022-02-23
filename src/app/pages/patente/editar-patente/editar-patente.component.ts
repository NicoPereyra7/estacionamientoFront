import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatenteI } from 'src/app/models/patente.interface';
import { PatenteService } from 'src/app/servicios/api/patente.service';

@Component({
  selector: 'app-editar-patente',
  templateUrl: './editar-patente.component.html',
  styleUrls: ['./editar-patente.component.scss'],
})
export class EditarPatenteComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private patenteService: PatenteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.idPatente = this.activatedRoute.snapshot.params['id'];
  }

  cadenaPatente!: string;
  idPatente!: number;
  patente!: PatenteI;

  ngOnInit(): void {
    this.buscarPatente();
  }

  buscarPatente(): void {
    this.patenteService.buscarPorId(this.idPatente).subscribe({
      next: (data) => {
        this.cadenaPatente = data.patente;
        this.patente = data;
      },
      error: (err) => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/patentes']);
      },
    });
  }

  crearPatente(): void {
    this.patente.patente = this.cadenaPatente;
    this.patenteService.editarPatente(this.idPatente, this.patente).subscribe({
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatenteService } from '../../../servicios/api/patente.service';
import { TokenService } from 'src/app/servicios/api/token.service';
import { PatenteI } from '../../../models/patente.interface';

@Component({
  selector: 'app-patentes',
  templateUrl: './patentes.component.html',
  styleUrls: ['./patentes.component.scss'],
})
export class PatentesComponent implements OnInit {
  patentes: PatenteI[] = [];
  vacio!: boolean;

  constructor(
    private readonly router: Router,
    private patenteService: PatenteService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
    this.listarPatentes();
  }

  listarPatentes(): void {
    this.patenteService
      .getAll(this.tokenService.getIdUser())
      .subscribe((data) => {
        this.patentes = data;
        if (this.patentes.length > 0) {
          this.vacio = true;
        }
      });
  }

  eliminar(id: number): void {
    this.patenteService.delete(id).subscribe({
      next: (data) => {
        this.listarPatentes();
      },
    });
  }

  agregarPatente() {
    this.router.navigate(['nuevaPatente']);
  }

  editarPatente(id: number) {
    this.router.navigate(['editarPatente', id]);
  }
}

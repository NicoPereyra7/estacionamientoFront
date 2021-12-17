import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatenteService} from '../../servicios/api/patente.service'
import { TokenService } from 'src/app/servicios/api/token.service';
import { patenteI} from '../../models/patente.interface'

@Component({
  selector: 'app-patentes',
  templateUrl: './patentes.component.html',
  styleUrls: ['./patentes.component.scss']
})
export class PatentesComponent implements OnInit {

  patentes:patenteI[]=[];

  constructor(private readonly router: Router,private patenteService:PatenteService,private tokenService:TokenService) { }

  ngOnInit(): void {

    this.listarPatentes();
  }

  listarPatentes():void{
    this.patenteService.getAll(1)
    .subscribe(
      data => {
        this.patentes = data;
      }
    );
  }

}

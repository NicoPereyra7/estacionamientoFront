import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioNuevo } from 'src/app/models/usuario-nuevo';
import { ApiService } from 'src/app/servicios/api/api.service';
import { TokenService } from 'src/app/servicios/api/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private usuarioService: ApiService,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) { }

  loggeado: boolean = false;
  usuarioNuevo: UsuarioNuevo = new UsuarioNuevo();

  ngOnInit(): void {
    this.verificarToken();
  }

  verificarToken(): void {
    if (this.tokenService.getToken()) {
      this.loggeado = true;
    }
  }

  crearUsuario(): void {
    this.usuarioService.crearUsuario(this.usuarioNuevo).subscribe({
      next: (data) => {
        this.toastr.success('', data['mensaje'], {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/home']);
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

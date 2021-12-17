import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { TokenService } from 'src/app/servicios/api/token.service';
import { LoginI } from '../../models/login.interface';
import { ResponseI } from '../../models/response.interface'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
}) 
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    telefono: new FormControl('',Validators.required),
    clave: new FormControl('',Validators.required),
  })

  
  constructor(private readonly router: Router, private api:ApiService, private tokenService:TokenService) {}

  errorStatus:boolean = false;
  errorMsg:any ='';

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['home']);
    }
  }

  onLogin(form: LoginI){
    this.api.loginByTelefono(form).subscribe(data =>{
      let dataResponse:ResponseI = data;
      if(dataResponse.token){
        this.tokenService.setToken(dataResponse.token);
        this.router.navigate(['home']); 
      }else{
        this.errorStatus = true;
        this.errorMsg = HttpErrorResponse;
        
      }

   })
  }
}


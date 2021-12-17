import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  public setToken(token: string): void {
    window.localStorage.removeItem("token");
    window.localStorage.setItem("token", token);
  }

  public getToken():string {
    return localStorage.getItem("token")!
  }

  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
  public logOut(): void {
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }

  public getUser(): any {
    if (!this.isLogged()) {
      return null;
    }
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const telefono = values.sub;
    return telefono;
  }

  public getIdUser(): any {
    if (!this.isLogged()) {
      return null;
    }
    const token = this.getToken();
    const payload = token.split('.')[1];//acá estan los datos del usuario
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const telefono = values.jti;
    return telefono;
  }
}

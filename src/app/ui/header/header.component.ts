import { Component, OnInit } from '@angular/core';
import { TokenService} from '../../servicios/api/token.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggeado=false;

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loggeado = this.tokenService.isLogged();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-gerente-de-area',
  templateUrl: './gerente-de-area.page.html',
  styleUrls: ['./gerente-de-area.page.scss'],
})
export class GerenteDeAreaPage implements OnInit {

  evento: any;
  status: number;
  mensagem: string;

  constructor(private server: SystemService, private router: Router) { }

  ngOnInit() {
    this.evento = this.server.evento;
    this.status = 0;
  }

  selecionar(){
    this.server.selecionar();
    this.mensagem = 'Selecionado!';
  }

  nao_selecionado(){
    this.server.nao_selecionar();
    this.mensagem = 'Não Selecionado!';
  }

  logout(){
    this.router.navigate(['/home']);
  }

}

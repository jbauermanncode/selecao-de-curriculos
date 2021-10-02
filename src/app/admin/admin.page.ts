import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  SystemService } from '../system.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  nome: string;
  vaga: string;
  avaliador: string;
  formacao_edu: string;
  exp_pro: string;
  ingles: string;
  candidatos: any[];
  mensagem: string;

  constructor(private server: SystemService, private router: Router) {

   }

  ngOnInit() {
    if(this.server.evento){
      this.nome = this.server.evento.nome;
      this.vaga = this.server.evento.vaga;
      this.avaliador = this.server.evento.avaliador;
      this.formacao_edu = this.server.evento.formacao_edu;
      this.exp_pro = this.server.evento.exp_pro;
      this.ingles = this.server.evento.ingles;
      this.candidatos = new Array(...this.server.evento.candidatos);
    } else {
    this.candidatos = [];
    }
  }

  cadastrar(){
    try {
      this.server.cadastrar(this.nome, this.vaga,this.avaliador, this.formacao_edu, this.exp_pro, this.ingles, this.candidatos);
      this.mensagem = 'Salvo com SUCESSO!';
    } catch (error) {
      this.mensagem = error;
    }
  }

  logout(){
    this.router.navigate(['/home']);
  }

}



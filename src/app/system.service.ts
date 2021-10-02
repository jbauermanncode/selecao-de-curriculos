import { Injectable } from '@angular/core';

export const RECURSOS_HUMANOS = 1;
export const GERENTE_DE_AREA = 2;

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  logado: any;
  usuarios: any[];
  evento: any;


  constructor() {
    this.usuarios = [
      {id: 1, nome:'Astolfo Andrade', email:'astolfo_andrade@hotmail.com', senha:'A1234D', perfil: RECURSOS_HUMANOS},
      {id: 2, nome:'Adamastor Silva', email:'adam@hotmail.com', senha:'1234D56', perfil: GERENTE_DE_AREA},
    ];

    this.logado = null;
    this.evento = null;
   }

   login(email: string, senha: string){
     for(let i = 0; i < this.usuarios.length; i++){
       const usr = this.usuarios[i];

       if((usr.email === email) && (usr.senha === senha)){
         this.logado = usr;
         return;
       }
     }
     throw new Error("E-mail ou Senha inválido");
   }

   cadastrar(nome, vaga, avaliador, formacao_edu, exp_pro,ingles, candidatos){

    if((!nome) || (nome === '')){
      throw new Error('Nome do candidato deve ser preenchido')
    }
    if((!vaga) || (vaga === '')){
      throw new Error('Vaga deve ser preenchida')
    }
    if((!avaliador) || (avaliador === '')){
      throw new Error('Gerente Avaliador deve ser preenchido')
    }
    if((!formacao_edu) || (formacao_edu === '')){
      throw new Error('Formação Educacional deve ser preenchida')
    }
    if((!exp_pro) || (exp_pro === '')){
      throw new Error('Experiência Profissional deve ser preenchida')
    }
    if((!ingles) || (ingles === '')){
      throw new Error('Nível de Inglês deve ser preenchid0')
    }


    if(!this.evento){
      this.evento = {
        nome: nome,
        vaga: vaga,
        avaliador: avaliador,
        formacao_edu: formacao_edu,
        exp_pro: exp_pro,
        ingles: ingles,
        candidatos: new Array(...candidatos)
      };
    } else{
      this.evento.nome = nome;
      this.evento.vaga = vaga;
      this.evento.avaliador = avaliador;
      this.evento.formacao_edu = formacao_edu;
      this.evento.exp_pro = exp_pro;
      this.evento.ingles = ingles;
      this.evento.candidatos = new Array(...candidatos);
    }
    }

    selecionar(){
      for(let i = 0; i < this.evento.candidatos.length; i++) {
        const cand = this.evento.candidatos[i];
        if(cand.id === this.logado.id){
          cand.status = 1;
          return;
        }
      }
      this.evento.candidatos.push({
        id: this.logado.id,
        nome: this.logado.nome,
        status: 1
      })
    }

    nao_selecionar(){
      for(let i = 0; i < this.evento.candidatos.length; i++) {
        const cand = this.evento.candidatos[i];
        if(cand.id === this.logado.id){
          cand.status = 0;
          return;
        }
      }
    }

   }


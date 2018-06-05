import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-lista',
  templateUrl: './app-todo-lista.component.html',
  styleUrls: ['./app-todo-lista.component.css']
})
export class AppTodoListaComponent implements OnInit {
  formShow = false;
  todolista = [];
  formulario: FormGroup;
  mensagem = "";
  constructor(private todoService: TodoService, 
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario();
    this.listar();
  }

  configurarFormulario(){
    this.formulario = this.formBuilder.group({
      descricao : [null, Validators.required],
      horario : [null, Validators.required]

    });
  }

  listar(){
    this.todoService.listar().subscribe(lista => this.todolista = lista);
  }

  criar(){
    this.todoService.criar(this.formulario.value).subscribe(resposta => this.todolista.push(resposta));
    this.formulario.reset();
    this.exibeFormulario();
    this.mensagem = 'Tarefa armazenada com sucesso';
    setTimeout (() => {
      this.mensagem = '';
      this.listar();
   }, 3000);
  }

  excluir(todo: any){
    this.todoService.excluir(todo).subscribe((res) => {
    });
    this.mensagem = 'Tarefa "'+todo.descricao+'" excluida com sucesso';
    setTimeout (() => {
      this.mensagem = '';
      this.listar();
    }, 3000);
    
  }

  atualizar(todo: any){
    this.todoService.atualizar(todo).subscribe(resposta => this.listar());

  }

  exibeFormulario(){
    if(this.formShow === true){
      this.formShow = false;
    } else {
      this.formShow = true;
    }
  }

}

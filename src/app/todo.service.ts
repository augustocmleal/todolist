import { enableProdMode, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

enableProdMode();

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todoUrl = 'https://behbqlqhdk.execute-api.us-east-1.amazonaws.com/dev';

  constructor(private http: HttpClient ) { }

  listar(){
    return this.http.get<any[]>(this.todoUrl);
  }

  criar(todo: any){
    return this.http.post(this.todoUrl, todo);
  }

  atualizar(todo: any){
    return this.http.put(this.todoUrl, todo);
  }

  excluir(todo: any){  
    return this.http.delete(this.todoUrl, {params : todo});  
  }

}

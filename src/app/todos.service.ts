import { Injectable } from '@angular/core';
export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  inputValue = '';
  id = 0;
  todos: Todo[] = [{ id: ++this.id, completed: true, content: 'Wake up' }];

  constructor() {}

  addTodo() {
    if (!this.inputValue) {
      return;
    }
    this.todos.push({
      id: ++this.id,
      completed: false,
      content: this.inputValue
    });

    this.inputValue = '';
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => {
      return todo.id !== id;
    });
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });
  }
}

import { Component } from '@angular/core';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="inputValue" (keydown.enter)="addTodo()" />
    <button (click)="addTodo()" [disabled]="!inputValue">Add</button>
    <ul>
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
  `,
  styles: [
    `
      ul {
        list-style: none;
      }
    `
  ]
})
export class AppComponent {
  inputValue = '';
  id = 0;
  todos: Todo[] = [
    {
      id: ++this.id,
      content: 'Wake up',
      completed: true
    }
  ];

  addTodo() {
    if (!this.inputValue) {
      return;
    }
    this.todos.push({
      id: ++this.id,
      content: this.inputValue,
      completed: false
    });
    this.inputValue = '';
  }
}

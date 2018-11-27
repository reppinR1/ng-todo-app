import { Component } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="service.inputValue" (keydown.enter)="service.addTodo()" />
    <button (click)="service.addTodo()" [disabled]="!service.inputValue">Add</button>
    <ul>
      <li *ngFor="let todo of service.todos">
        <span [class.completed]="todo.completed">{{ todo.content }} </span>
        <button (click)="service.toggleTodo(todo.id)">Toggle</button>
        <button (click)="service.removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  `,
  styles: [
    `
      ul {
        list-style: none;
      }

      .completed {
        text-decoration: line-through;
      }
    `
  ]
})
export class AppComponent {
  constructor(public service: TodosService) {}
}

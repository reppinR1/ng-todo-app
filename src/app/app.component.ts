import { Component } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          [(ngModel)]="service.inputValue"
          (keydown.enter)="service.addTodo()"
        />
        <button (click)="service.addTodo()" [disabled]="!service.inputValue">
          Add
        </button>
        <div></div>
        <ul>
          <li *ngFor="let todo of service.todos">
            <button (click)="service.toggleTodo(todo.id)" class="edit-button">
              -
            </button>
            <button (click)="service.removeTodo(todo.id)" class="edit-button">
              X
            </button>
            <span [class.completed]="todo.completed">{{ todo.content }} </span>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
        font-family: Helvetica;
        background: #f5f5f5;
      }

      h1 {
        color: #369;
      }
      ul {
        list-style: none;
        display: inline;
      }

      li {
        margin-top: 8px;
        font-size: 24px;
      }
      input,
      button {
        height: 2rem;
      }

      input {
        margin-right: 8px;
        font-size: 24px;
      }
      .edit-button {
        margin-right: 8px;
        width: 24px;
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

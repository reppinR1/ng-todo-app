import { TodosService } from './todos.service';

describe('TodosService', () => {
  describe('todos', () => {
    it('should have an initial todo', () => {
      const service = new TodosService();

      expect(service.todos[0]).toEqual({
        id: 1,
        content: 'Wake up',
        completed: true
      });
    });
  });

  describe('addTodo()', () => {
    it('should not add todo if input is empty', () => {
      const service = new TodosService();

      expect(service.todos.length).toBe(1);

      service.addTodo();

      expect(service.todos.length).toBe(1);

    });
    it('should add todo', () => {
      const service = new TodosService();

      expect(service.todos.length).toBe(1);

      service.inputValue = 'Learn Angular';
      service.addTodo();

      expect(service.todos.length).toBe(2);
      expect(service.todos[1]).toEqual({
        id: 2,
        content: 'Learn Angular',
        completed: false
      });
      expect(service.inputValue).toBe('');
    });
  });

  describe('removeTodo()', () => {
    it('should remove todo', () => {
      const service = new TodosService();

      expect(service.todos.length).toBe(1);

      service.removeTodo(1);

      expect(service.todos.length).toBe(0);
    });
  });

  describe('toggleTodo()', () => {
    it('should toggle todo', () => {
      const service = new TodosService();

      expect(service.todos[0].completed).toBe(true);

      service.toggleTodo(1);

      expect(service.todos[0].completed).toBe(false);
    });
  });
});


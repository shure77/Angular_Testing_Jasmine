import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable, from } from 'rxjs';

// here we test if a property (todos) is set by the return of a service

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null); // passing null to the service as we do not use the httpService
    component = new TodosComponent(service);
  });
  // ARRANGE
  it('should set todos property with the items returned from the server', () => {
    let todos = [ 1, 2, 3 ];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from( [ todos ] );
    }); // here we change the implementation of getTodos() method. With spyOn we check if the method is called. With callFake() we change the implementation of the getTodo() method.

  // ACT
  component.ngOnInit();

  // ASSERT
  // expect(component.todos.length).toBeGreaterThan(0); // less specific
  // expect(component.todos.length).toBe(3); // more specific
  expect(component.todos).toBe(todos); // much more specific
  });
});
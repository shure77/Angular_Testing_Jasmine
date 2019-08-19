import { TodosComponent } from "./todos.component";
import { TodoService } from "./todo.service";
import { from, empty, throwError } from "rxjs";

// here we test if a property (todos) is set by the return of a service

describe("TodosComponent", () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null); // passing null to the service as we do not use the httpService
    component = new TodosComponent(service);
  });
  // ARRANGE
  it("should set todos property with the items returned from the server", () => {
    let todos = [1, 2, 3];

    spyOn(service, "getTodos").and.callFake(() => {
      return from([todos]);
    }); // here we change the implementation of getTodos() method. With spyOn we check if the method is called. With callFake() we change the implementation of the getTodo() method.

    // ACT
    component.ngOnInit();

    // ASSERT
    // expect(component.todos.length).toBeGreaterThan(0); // less specific
    // expect(component.todos.length).toBe(3); // more specific
    expect(component.todos).toBe(todos); // much more specific
  });

  // Another test. We test the add() method. 1. is it called? 2. is a new object added to the property? 3. is the error message outputted?
  // ARRANGE
  it("should call the server to save the changes when a new todo item is added", () => {
    let spy = spyOn(service, "add").and.callFake(t => {
      return empty(); // with empty() we dont care about the return from the server. here we just want to be sure, that the add() method is called
    });

    // ACT
    component.add();

    // ASSERT
    expect(spy).toHaveBeenCalled();
  });

  // Is a new object added? ARRANGE
  it("should add the new todo returned from the server", () => {
    let todo = { id: 1 };
    let spy = spyOn(service, "add").and.callFake(t => {
      return from ([ todo ]);
    });

    // ACT
    component.add();

    // ASSERT
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });
  
  // Is the error message printed? ARRANGE
  it("should set the message property if server returns an error when adding a new todo", () => {
    let error = 'Error from the server.';
    let spy = spyOn(service, "add").and.callFake(t => {
      return throwError(error);
    });

    // ACT
    component.add();

    // ASSERT
    expect(component.message).toBe(error);
  });
});

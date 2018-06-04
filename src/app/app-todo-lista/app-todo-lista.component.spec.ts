import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTodoListaComponent } from './app-todo-lista.component';

describe('AppTodoListaComponent', () => {
  let component: AppTodoListaComponent;
  let fixture: ComponentFixture<AppTodoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTodoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTodoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

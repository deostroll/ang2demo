import {Component} from 'angular2/core';
import {List} from './components/list';
import {Form} from './components/form';

@Component({
  selector: 'my-app',
  directives: [List, Form],
  template: `
    <div class="container">
      <h1>Todo App</h1>
      <todo-form></todo-form>
      <list></list>
    </div>
  `
})
export class App {

}

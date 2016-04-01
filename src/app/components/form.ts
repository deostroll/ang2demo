import {Component} from 'angular2/core';
import Item from './item';
import {ListService} from './list-service';

@Component({
  selector: 'todo-form',
  templateUrl: 'app/components/form.html'
})
export class Form {
  theTask: string = '';
  list: ListService;

  constructor(list: ListService) {
    this.list = list;
  }

  addTask(task: string) {
    let item = new Item(task);
    this.list.add(item);
    this.theTask = '';
  }

  trim(text: string) {
    if (text) {
      return text && text.replace(/^\s+/, '').replace('/\s+$', '');
    }
    return '';
  }
}

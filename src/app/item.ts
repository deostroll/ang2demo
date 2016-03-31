import {Component} from 'angular2/core';
@Component({
  selector: 'item',
  properties: ['task'],
  template: `
    <li>
      <input type="checkbox"/>
      {{task}}
    </li>
  `
})
export class Item {
  public task: string
  public isCompleted: boolean
  constructor(task: string){
    this.task = task;
    this.isCompleted = false;
  }
}

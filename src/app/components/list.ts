import {Component} from 'angular2/core';
import Item from './item';

@Component({
  selector: 'list',
  // directives: [Item],
  templateUrl: 'list.html'
})
export class List {
  public items: Array<Item>;

  public add(item: Item) {
    this.items.push(item);
    item.id = this.getUniqueId();
  }

  getUniqueId() {
    let isSet = false;
    let id = 0;

    while (!isSet) {
      id = Math.floor(Math.random() * 100 + 1);
      isSet = !this.items.some(x => x.id === id);
    }
    return id;
  }

  public remove(id: number) {
    let itemArr = this.items.filter(x => x.id === id);
    if (itemArr.length) {
      let item = itemArr[0];
      let idx = this.items.indexOf(item);
      this.items.splice(idx, 1);
      return;
    }
    throw new Error('does not exist');
  }
}

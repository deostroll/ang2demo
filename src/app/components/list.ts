// import {Component, Inject} from 'angular2/core';
import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
// import {Item} from './item';
import Item from './item';


@Component({
  selector: 'list',
  templateUrl: 'app/components/list.html',
  directives: [CORE_DIRECTIVES],
  providers: [ListService]
})

export class List {

  items: Array<Item> = [];
  theList: ListService;

  constructor(theList: ListService) {
    let self = this;
    this.theList = theList;
    this.items = theList.getAll();
    theList.onChange(function(){
      self.items = theList.getAll();
    });
  }

  public remove(id: number) {
    this.theList.remove(id);
  }
}

export class ListService {

  items: Array<Item> = [];
  _callbacks: Array<Function> = [];

  add(item: Item) {
    item.id = this._getUniqueId();
    this.items.push(item);
    this._fireOnChange();
  }

  remove(id: number) {
    let i: number;
    for (i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
          break;
      }
    }

    if (i === this.items.length) {
      throw new Error('item does not exist');
    }
    this.items.splice(i, 1);
    this._fireOnChange();
  }

  _getUniqueId() {
    let isSet = false;
    let id = 0;

    while (!isSet) {
      id = Math.floor(Math.random() * 100 + 1);
      isSet = !this.items.some(x => x.id === id);
    }
    return id;
  }

  _fireOnChange() {
    if (this._callbacks.length) {
      this._callbacks.forEach(cb => cb.call(this));
    }
  }

  onChange(cb: Function) {
    return this._callbacks.push(cb);
  }

  getAll() {
    return this.items;
  }
}

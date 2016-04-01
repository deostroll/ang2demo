import Item from './item';
import {Injectable} from 'angular2/core';

@Injectable()
export class ListService {

  items: Array<Item> = [];
  _callbacks: Array<Function> = [];

  constructor () {
    console.log('foo');
    // let e = new Error('dummy');
    // let stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
    //     .replace(/^\s+at\s+/gm, '')
    //     .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
    //     .split('\n');
    // console.log(stack);
  }

  add(item: Item) {
    item.id = this._getUniqueId();
    this.items.push(item);
    // this._fireOnChange();
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
    // this._fireOnChange();
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

// import {Component, Inject} from 'angular2/core';
import {Component, Injectable, Inject} from 'angular2/core';
// import {Component, Injectable} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
// import {Item} from './item';
import Item from './item';
import {ListService} from './list-service';

@Component({
  selector: 'list',
  templateUrl: 'app/components/list.html',
  directives: [CORE_DIRECTIVES],
  providers: [ListService]
})
export class List {
  items: Array<Item> = [];

  constructor(private theList: ListService) {
    let self = this;
    this.items = theList.getAll();
    theList.onChange(function(){
      self.items = theList.getAll();
    });
  }

  // constructor(Inject(ListService)private theList: ListService) {
  //   let self = this;
  //   this.items = theList.getAll();
  //   theList.onChange(function(){
  //     self.items = theList.getAll();
  //   });
  // }

  public remove(id: number) {
    this.theList.remove(id);
  }
}

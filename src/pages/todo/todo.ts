import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoProvider as Todo } from '../../providers/todo/todo';

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {
  db: Todo;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.db = new Todo();
  }

  onCreate() {
    this.db.save().then(
      data => {
        this.navCtrl.pop();
      },
      error => {
        console.error(error);
      }
    );
  }
}

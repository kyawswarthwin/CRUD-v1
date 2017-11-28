import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoProvider as Todo } from '../../providers/todo/todo';

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {
  todos: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewWillEnter() {
    Todo.query()
      .then(data => {
        this.todos = data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}

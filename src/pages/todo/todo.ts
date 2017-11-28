import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TodoProvider as Todo } from '../../providers/todo/todo';

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {
  isEditView = false;
  db: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data.id) {
      this.isEditView = true;
      this.db = this.navParams.data.toJSON();
      console.log(this.db);
    } else {
      this.db = new Todo();
    }
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

  onUpdate() {
    let db = new Todo();
    db.save(this.db).then(
      data => {
        this.navCtrl.pop();
      },
      error => {
        console.error(error);
      }
    );
  }

  onDelete() {
    let db = new Todo();
    db.id = this.db.objectId;
    db.destroy().then(
      data => {
        this.navCtrl.pop();
      },
      error => {
        console.error(error);
      }
    );
  }
}

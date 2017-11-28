import { Injectable } from '@angular/core';

import Parse from 'parse';

@Injectable()
export class TodoProvider extends Parse.Object {
  constructor() {
    super('Todo');
  }

  static query(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      let query = new Parse.Query(this);
      query.find().then(resolve, reject);
    });
  }

  get todo(): string {
    return this.get('todo');
  }

  set todo(todo: string) {
    this.set('todo', todo);
  }
}

Parse.Object.registerSubclass('Todo', TodoProvider);

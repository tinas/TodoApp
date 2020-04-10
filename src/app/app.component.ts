import { Component, OnInit } from '@angular/core';
import { Model, TodoItem } from 'src/models/model';
import { MongodbService } from './services/mongodb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  model = new Model();
  isDisplay = false;

  constructor(private mongodbService: MongodbService) { }

  ngOnInit(): void { }

  getName() {
    return this.model.userName;
  }

  getItems() {
    if (this.isDisplay) {
      console.log(this.model.items);
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

  addItem(value) {
    if (value != "") {
      this.model.items.push(new TodoItem(value, false));
    }
  }
}

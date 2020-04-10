import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {

  private url = "mongodb+srv://ahmttnstpe:123456at@todo-pdv8g.mongodb.net/test?retryWrites=true&w=majority";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }
}

import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IComment, IPost, IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userStorage = new BehaviorSubject<IUser>({id: '', name: '', email: ''})
  postStorage = new BehaviorSubject<IPost>({id: '', title: '', body: ''})
  commentStorage = new BehaviorSubject<IComment>({id: '', email: '', name: '', body: ''})

  constructor() {
  }
}

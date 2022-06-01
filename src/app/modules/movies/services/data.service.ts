import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  storageTheme = new BehaviorSubject<boolean>(false);
  storagePage = new BehaviorSubject<number>(1);
  storageGenre = new BehaviorSubject<number | null>(null);

  constructor() {
  }
}

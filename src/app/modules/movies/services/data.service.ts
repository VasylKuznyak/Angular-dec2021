import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  storageGenre = new BehaviorSubject<number | null>(null);
  storageTheme = new BehaviorSubject<boolean>(false);
  storagePage = new BehaviorSubject<number>(1);

  constructor() {
  }
}

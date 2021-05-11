import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users$: BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(new Array<string>());

  constructor() { }

  public addUser(username: string) {
    const users: Array<string> = this.users$.value;
    users.push(username);
    this.users$.next(users);
  }
}

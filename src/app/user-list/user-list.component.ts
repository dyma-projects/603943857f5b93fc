import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users$: BehaviorSubject<Array<string>>;

  constructor(
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.users$ = this._userService.users$;
  }


}

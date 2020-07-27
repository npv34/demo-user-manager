import { Component, OnInit } from '@angular/core';
import {IUser} from "../iuser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title_page = 'Users'
  users: IUser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gamil.com'
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gamil.com'
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gamil.com'
    }
  ]

  userFilter =[];
  constructor() { }

  ngOnInit(): void {
    this.userFilter = this.users;
  }

  search(event){
    let keyword = event.target.value;
    this.userFilter = (keyword) ? this.filerByKeyword(keyword): this.users;
  }

  filerByKeyword(keyword) {
    return this.users.filter(user => {
        return user.name.indexOf(keyword) != -1;
    })
  }

}

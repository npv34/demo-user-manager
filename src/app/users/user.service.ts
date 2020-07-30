import { Injectable } from '@angular/core';
import {IUser} from "./iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:IUser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gamil.com',
      group_id: 1
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gamil.com',
      group_id: 1
    },
    {
      id: 4,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    }
  ]
  constructor() { }

  getAll() :IUser[] {
    return this.users;
  }

  add(user: IUser) :void{
    this.users.push(user);
  }

  findById(id: number) : IUser{
    let index =  this.getIndexUser(id);
    return this.users[index];
  }

  edit(id: number, data: IUser) {
    let index =  this.getIndexUser(id);
    this.users[index].name = data.name;
    this.users[index].email = data.email;
    this.users[index].group_id = data.group_id;
  }

  getIndexUser(id: number) {
    for (let i=0; i< this.users.length; i++) {
      if (this.users[i].id === id) {
        return i;
      }
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {UserService} from "../user.service";
import {GroupService} from "../../groups/group.service";
import {IGroup} from "../../groups/igroup";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  editUserForm: FormGroup;
  groups: IGroup[];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private userService: UserService,
              private groupService: GroupService,
              private router: Router) {
  }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    let user = this.userService.findById(this.id);
    this.groups = this.groupService.getAll();
    console.log(this.groups)
    this.editUserForm = this.fb.group({
      id: [user.id, [Validators.required]],
      name: [user.name, [Validators.required]],
      email: [user.email, [Validators.required]],
      group_id: [user.group_id]
    })
  }

  submit() {
    let newData = this.editUserForm.value;
    this.userService.edit(this.id, newData);
    this.router.navigate(['users'])
  }

}

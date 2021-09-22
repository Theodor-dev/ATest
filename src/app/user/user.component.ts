import { Component, OnInit } from '@angular/core';
import { Users } from '../Users/Users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Users [] = User;

  constructor() {} 

  ngOnInit(): void {
  }

}

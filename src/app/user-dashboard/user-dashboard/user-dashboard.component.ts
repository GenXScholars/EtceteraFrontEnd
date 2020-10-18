import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-models';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
 user: User;
  constructor() { }

  ngOnInit(): void {
  }

}

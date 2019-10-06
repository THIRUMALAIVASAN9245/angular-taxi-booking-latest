import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
  userDetails: any[];

  constructor() { }

  ngOnInit(): void {
    this.userDetails = [
      {
        name: "Thirumalai",
        mobile: 912345678,
        email: "thirumalai@gmail.com",
        status: "Active",
        dateofbirth: new Date("1990-02-02")
      },
      {
        name: "Vasan",
        mobile: 9087612345,
        email: "Vasan@gmail.com",
        status: "Active",
        dateofbirth: new Date("1991-02-02")
      },
      {
        name: "Other",
        mobile: 8768435345,
        email: "Other@gmail.com",
        status: "InActive",
        dateofbirth: new Date("1991-02-02")
      },
      {
        name: "Test",
        mobile: 5645645645,
        email: "Test@gmail.com",
        status: "Active",
        dateofbirth: new Date("1991-02-02")
      }
    ]
  }
}
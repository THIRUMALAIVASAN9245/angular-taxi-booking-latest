import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-driver-details',
    templateUrl: './driver-details.component.html'
})
export class DriverDetailsComponent implements OnInit {
driverDetails: any[];

  constructor() { }

  ngOnInit(): void {
    this.driverDetails = [
      {
        name: "Thirumalai",
        mobile: 912345678,
        email: "thirumalai@gmail.com",
        status: "Active",
        dateofbirth: new Date("1990-02-02"),
        vehicleNumber: "TN 11 CY 2200",
        avatar: "fsdfsdf",
        license: "fsdfsdf",
        insurance: "fsdfsdf",
        registration: "fsdfsdf",
        permit: "fsdfsdf"
      },
      {
        name: "Vasan",
        mobile: 6464565545,
        email: "Vasan@gmail.com",
        status: "InActive",
        dateofbirth: new Date("1990-02-02"),
        vehicleNumber: "TN 11 CY 2200",
        avatar: "fsdfsdf",
        license: "fsdfsdf",
        insurance: "fsdfsdf",
        registration: "fsdfsdf",
        permit: "fsdfsdf"
      }
    ]
  }
}
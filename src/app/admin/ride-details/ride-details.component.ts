import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html'
})
export class RideDetailsComponent implements OnInit {
  rideDetails: any[];

  constructor() { }

  ngOnInit(): void {
    this.rideDetails = [
      {
        driverName: "Scorpio Driver",
        customerName: "Thirumalai",
        pickupAddress: "Tadwadi, Surat, Gujarat, India",
        pickupDate: new Date("1990-02-02"),
        dropAddress: "Bharuch, Gujarat, India",
        dropDate: new Date("1990-02-02"),
        amount: "855",
        paymentStatus: "PAID",
        status: "COMPLETED"
      },
      {
        driverName: "Scorpio Driver",
        customerName: "Thirumalai",
        pickupAddress: "Thane, Maharashtra, India",
        pickupDate: new Date("1990-02-02"),
        dropAddress: "Bharuch, Gujarat, India",
        dropDate: new Date("1990-02-02"),
        amount: "527",
        paymentStatus: "",
        status: "CANCELLED"
      },
      {
        driverName: "Scorpio Driver",
        customerName: "Thirumalai",
        pickupAddress: "tTadwadi, Surat, Gujarat, India",
        pickupDate: new Date("1990-02-02"),
        dropAddress: "Delhi, India",
        dropDate: new Date("1990-02-02"),
        amount: "143",
        paymentStatus: "",
        status: "ACCEPTED"
      },
      {
        driverName: "Scorpio Driver",
        customerName: "Thirumalai",
        pickupAddress: "tTadwadi, Surat, Gujarat, India",
        pickupDate: new Date("1990-02-02"),
        dropAddress: "Delhi, India",
        dropDate: new Date("1990-02-02"),
        amount: "743",
        paymentStatus: "",
        status: "PENDING"
      },
      {
        driverName: "Scorpio Driver",
        customerName: "Thirumalai",
        pickupAddress: "tTadwadi, Surat, Gujarat, India",
        pickupDate: new Date("1990-02-02"),
        dropAddress: "Delhi, India",
        dropDate: new Date("1990-02-02"),
        amount: "262",
        paymentStatus: "PAID",
        status: "COMPLETED"
      }
    ]
  }
}
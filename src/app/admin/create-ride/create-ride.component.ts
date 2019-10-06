import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.component.html'
})
export class CreateRideComponent implements OnInit {
  mytime: Date = new Date();

  constructor() { }

  ngOnInit(): void {

  }
}
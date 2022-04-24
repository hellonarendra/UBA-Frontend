import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }
  uba_member = false;
  village_problem = false;
  events = false;
  gallary = false;

  ngOnInit(): void {
  }
  ubaMember() {
    this.uba_member = true;
    this.village_problem = false;
    this.events = false;
    this.gallary = false;
  }
  villageProblem() {
    this.village_problem = true;
    this.uba_member = false;
    this.events = false;
    this.gallary = false;
  }
  event() {
    this.events = true;
    this.village_problem = false;
    this.uba_member = false;
    this.gallary = false;
  }
  photos() {
    this.gallary = true;
    this.events = false;
    this.village_problem = false;
    this.uba_member = false;
  }
}

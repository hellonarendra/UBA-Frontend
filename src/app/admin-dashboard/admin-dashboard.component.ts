// import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  guestRole;
  guestLogin = false;
  userLogin = false;
  userRole;
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  uba_member = false;
  village_problem = false;
  events = false;
  gallary = false;
  userContact = false;
  post_report = false;

  constructor(private toastr: ToastrService) { }


  ngOnInit(): void {
    // this.loginStatus$ = this.isLoggesIn;
    console.log("current user is :", this.currentUser);
    this.guestRole = this.currentUser.role;
    console.log("role is:", this.guestRole);
  }
  checkLoginStatus(): boolean {
    return false;
  }
  get isLoggesIn() {
    return this.loginStatus.asObservable();
  }
  logout() {
    var answer = window.confirm("Are you sure you want to logout?");
    if (answer) {
      this.logoutService();
      this.currentUser = "";
      this.toastr.warning('Logout Successfully');
      window.location.href = window.location.origin + "/home";
    }
    else {
      this.toastr.error('Please try again', 'Something went wrong');
    }
  }

  logoutService() {
    this.loginStatus.next(false);
    localStorage.clear();
    console.log('this is logout function:');
    console.log("currentUser is:", this.currentUser);
  }
  ubaMember() {
    this.uba_member = true;
    this.village_problem = false;
    this.events = false;
    this.gallary = false;
    this.userContact = false;
    this.post_report = false;
  }
  villageProblem() {
    this.village_problem = true;
    this.uba_member = false;
    this.events = false;
    this.gallary = false;
    this.userContact = false;
    this.post_report = false;
  }
  event() {
    this.events = true;
    this.village_problem = false;
    this.uba_member = false;
    this.gallary = false;
    this.userContact = false;
    this.post_report = false;
  }
  photos() {
    this.gallary = true;
    this.events = false;
    this.village_problem = false;
    this.uba_member = false;
    this.userContact = false;
    this.post_report = false;
  }
  userProblem() {
    this.userContact = true;
    this.gallary = false;
    this.events = false;
    this.village_problem = false;
    this.uba_member = false;
    this.post_report = false;
  }
  postReport() {
    this.post_report = true;
    this.userContact = false;
    this.gallary = false;
    this.events = false;
    this.village_problem = false;
    this.uba_member = false;
    // if (this.post_report) {
    //   this.toastr.success('Post Report opened ', 'Congratulations');
    //   // this.router.navigate(['/home'], { relativeTo: this.activatedRoute })
    // }
    // else {
    //   this.toastr.error('Please try again', 'Something went wrong');
    // }
  }
}

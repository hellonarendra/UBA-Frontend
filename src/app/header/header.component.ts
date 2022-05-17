import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  guestRole;
  guestLogin = false;
  userLogin = false;
  userRole;
  private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  currentUser = JSON.parse(localStorage.getItem("currentUser"));

  constructor(private toastr: ToastrService) { }

  loginStatus$: Observable<boolean>;
  ngOnInit(): void {
    this.loginStatus$ = this.isLoggesIn;
    console.log("current user is :", this.currentUser);
    this.guestRole = this.currentUser.role;
    console.log("role is:", this.guestRole);

    // if (this.guestRole == 'ubaMember') {
    //   this.userLogin = true;
    // }
    // this.userLogin = false;

    // if (this.guestRole == 'guest') {
    //   this.guestLogin = true;
    // }
    // this.guestLogin = false;
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
      this.toastr.info('Logout Successfully');
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
}

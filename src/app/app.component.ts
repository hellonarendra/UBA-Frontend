import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser;
  showUser;
  showAdmin;
  pname;
  PageName
  constructor(private Location: Location) {
    this.pname = this.Location.path();
    this.PageName = this.pname.split("/")[1];
    if (this.PageName == 'login') {
      // this.cryptoService.logout();
      window.location.href = window.location.origin + "/home";
    }
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("This is curent User", this.currentUser);
    if (
      this.currentUser == null ||
      this.currentUser.role == "guest" ||
      this.currentUser.role == "ubaMember"
    ) {
      this.showUser = true;
      this.showAdmin = false;
    } else {
      this.showAdmin = true;
      this.showUser = false;
    }
  }

  title = 'UBA-Frontend';
}

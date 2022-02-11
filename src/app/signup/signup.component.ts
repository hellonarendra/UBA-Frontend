import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  student;
  studentForm = false;
  xxx = true;
  constructor() { }


  ngOnInit(): void {

  }

  selectRole(event: any) {
    this.student = event.target.value;
    console.log(this.student);
    if (this.student == 'student') {
      this.studentForm = true;
      console.log(this.studentForm);
    }
    else {
      this.studentForm = false;
    }
  }

}

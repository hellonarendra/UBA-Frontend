import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  // constructor(private toastr: ToastrService, private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder) { }
  constructor() { }
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  loginProcess() {
    console.log('Hello user is logging in');
    axios.post(serverUrl + 'user/login', this.formGroup.value).then((response) => {
      console.log("login API is being called:");
      console.log(response);
      // if (response.data) {
      //   this.toastr.success('Congratulations', 'Successfully Logged in');
      //   // this.router.navigate(['/home'], { relativeTo: this.activatedRoute })
      // }
      // else {
      //   this.toastr.error('Please try again', 'Something went wrong');
      // }
    }).catch((error) => {
      console.log(error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from "rxjs";
import { map, catchError, mergeMap, tap } from "rxjs/operators";
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

  // login(data): Observable<any> {
  //   return this.http.post<any>(serverUrl + `user/login`, data).pipe(
  //     map((data) => {
  //       this.loginStatus.next(true);
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       localStorage.setItem("currentUser", JSON.stringify(data.data.payload));
  //       localStorage.setItem("token", JSON.stringify(data.data.token));
  //       return data;
  //     })
  //   );
  // }
  loginProcess() {
    // console.log('Hello user is logging in');
    axios.post(serverUrl + 'user/login', this.formGroup.value).then((response) => {
      console.log("login API is being called:");
      console.log(response);
      localStorage.setItem("currentUser", JSON.stringify(response.data.data.payload));
      localStorage.setItem("token", JSON.stringify(response.data.data.token));
      console.log('Hello user is logging in');
      console.log("CurrentUser from Login",);

      if (response.data.data.match == true) {
        // this.toastr.success(result.data.payload.userName, "Welcome");
        console.log('welcome');
        if (
          response.data.data.payload.role == "guest" ||
          response.data.data.payload.role == "ubaMember"
        ) {
          // console.log(response.data.data.payload.role);
          console.log('redirecting to home:');
          window.location.href = window.location.origin + '/home';
        } else {
          window.location.href = window.location.origin + '/admin-dashboard';
        }
      }
      // }
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
    this.formGroup.reset();
  }
}

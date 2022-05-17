import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import axios from 'axios';
import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  userId;
  id;
  selectedId: number;
  matchPassword = false;

  constructor(private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('uid');
    // console.log("This is Userid:", this.Id);

    this.passwordForm = new FormGroup({
      // id: this.userId,
      password: new FormControl("", [Validators.required]),
      // confirmPassword: new FormControl("", [Validators.required]),
    },
      // this.mustMatch('password', 'confirmPassword')
      // {
      //   validators: [this.match('password', 'confirmPassword')]
      // }
    )
  }
  changePsswords() {
    console.log('This is Chnage Password Function: and id is:', this.userId);
    // let passwordData = new FormData();
    // passwordData.append('id', this.userId)
    // passwordData.append('password', this.passwordForm.get('password').value)
    const passwordData = {
      id: this.userId,
      password: this.passwordForm.get('password').value
    }
    console.log(passwordData);

    // axios.post(serverUrl + 'user/changePassword', this.passwordForm).then((response) => {
    axios.post(serverUrl + `user/changePassword`, passwordData).then((response) => {
      console.log('Response of Confirm password:', response);
      if (response) {
        this.toastr.success('Please login with your credentials', 'Password set successfully');
        this.router.navigate(['/login'], { relativeTo: this.activatedRoute })
      }
      else {
        this.toastr.error("Please try again", "Some thing went wrong");
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
      if (checkControl.errors && !checkControl.errors.matching) {
        this.matchPassword = true;
        return null;
      }
      if (control.value !== checkControl.value) {
        controls.get(checkControlName).setErrors({ matching: true });
        return { matching: true };
      } else {
        // return null;
        window.alert("error");
      }
    };
  }


  // match(controlName: string, matchingControlName: string) {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[controlName];
  //     const matchingControl = formGroup.controls[matchingControlName];

  //     if (matchingControl.errors && !matchingControl.errors.mustMatch) {
  //       return;
  //     }
  //     // set error on matchingControl if validation fails
  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ mustMatch: true });
  //       // alert('Password Should be same');
  //     } else {
  //       matchingControl.setErrors(null);
  //       window.alert("Password must be same:");
  //     }
  //     return null;
  //   };
  // }

}

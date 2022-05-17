import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetForm: FormGroup;
  userId;
  selectedId: number;
  constructor(private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }
  ngOnInit(): void {
    // this.userId = this.activatedRoute.snapshot.paramMap.get('uid')
    // this.forgetForm = new FormGroup({
    //   id: this.userId,
    //   password: new FormControl("", [Validators.required]),
    // })
    this.forgetForm = new FormGroup({
      email: new FormControl("", [Validators.required])
    })
  }

  sendEmail() {
    axios.post(serverUrl + 'user/sendForgetEmail', this.forgetForm.value)
      .then((response) => {
        console.log('response of email', response);
        if (response) {
          this.toastr.success('Please Check Your Email', 'Email send Successfully');
          this.forgetForm.reset();
          // this.router.navigate(['/confirmPassword'], { relativeTo: this.activatedRoute })
          this.router.navigate(['/home'], { relativeTo: this.activatedRoute })
        }
        else {
          this.toastr.error("Please try again", "Some thing went wrong");
        }
      }).catch((error) => {
        console.log(error);
      });;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import axios from 'axios';
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
  selectedId: number;
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.paramMap.get('uid')
    this.passwordForm = new FormGroup({
      id: this.userId,
      password: new FormControl("", [Validators.required]),
    })
    this.passwordForm = new FormGroup({
      email: new FormControl("", [Validators.required])
    })
  }
  changePssword() {
    axios.post(serverUrl + 'user/changePassword', this.passwordForm.value).then((response) => {
      console.log(response);
      if (response) {
        this.router.navigate(['/login'], { relativeTo: this.activatedRoute })
      }
      else {
        console.log("someThing went wrong");

      }
    })
  }
}

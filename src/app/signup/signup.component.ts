import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  // constructor(private toastr: ToastrService, public router: Router, public activatedRoute: ActivatedRoute, public fb: FormBuilder) { }

  formGroup: FormGroup;
  // currentUser = JSON.parse(localStorage.getItem("currentUser"));
  ubaMember;
  ubaMembers = false;
  uploadedFiles = [];
  fileName = [];
  images = [];
  selectedFile: File;
  // private toastr: ToastrService,
  // private router: Router,
  // private activatedRoute: ActivatedRoute,
  // private cd: ChangeDetectorRef
  constructor(
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mobileNo: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      uploader: new FormControl('', [Validators.required]),
      branch: new FormControl('', [Validators.required]),
      enrollmentNo: new FormControl('', [Validators.required])
    })
  }

  registerProcess() {
    console.log(this.formGroup.value);
    let formData = new FormData();
    formData.append('uploader', this.selectedFile, this.selectedFile.name);
    formData.append('name', this.formGroup.get('name').value)
    formData.append('email', this.formGroup.get('email').value)
    formData.append('mobileNo', this.formGroup.get('mobileNo').value)
    formData.append('password', this.formGroup.get('password').value)
    formData.append('role', this.formGroup.get('role').value)
    formData.append('branch', this.formGroup.get('branch').value)
    formData.append('enrollmentNo', this.formGroup.get('enrollmentNo').value)
    axios.post(serverUrl + `user/sign-up`, formData).then((response) => {
      console.log('Sign up API is Called:');
      console.log(response);
      if (response) {
        this.formGroup.reset();
        //   this.toastr.success('Congratulations', 'Successfully signed up');
        //   // this.router.navigate(['/home'], { relativeTo: this.activatedRoute })
        // }
        // else {
        //   this.toastr.error('Please try again', 'Something went wrong');
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }

  selectRole(event: any) {
    this.ubaMember = event.target.value;
    console.log(this.ubaMember);
    if (this.ubaMember == 'ubaMember') {
      this.ubaMembers = true;
      console.log(this.ubaMembers);
    }
    else {
      this.ubaMembers = false;
    }
  }
}

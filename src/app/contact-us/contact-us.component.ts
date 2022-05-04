import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceDetectorService } from "ngx-device-detector";
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formGroup: FormGroup;
  whatsappNumber = +917734942883;
  whatsappText = "Hi,Welcome to UBA JUIT Please Enter your query.";
  constructor(
    private deviceService: DeviceDetectorService,) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      phone_Number: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    })
  }

  contactUs() {
    axios.post(serverUrl + 'contactUs/add', this.formGroup.value).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  getWhatsappMsg() {
    if (this.deviceService.isMobile()) {
      window.open("https://api.whatsapp.com/send?phone=" + this.whatsappNumber +
        "&text=" +
        this.whatsappText);
    } else {
      window.open("https://web.whatsapp.com/send?phone=" + this.whatsappNumber +
        "&text=" +
        this.whatsappText);
    }
  }
}

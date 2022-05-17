import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { BehaviorSubject, Observable } from "rxjs";
import { ToastrService } from 'ngx-toastr';
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-post-report',
  templateUrl: './post-report.component.html',
  styleUrls: ['./post-report.component.scss']
})
export class PostReportComponent implements OnInit {
  selectedFile: File;
  reportForm
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    this.reportForm = new FormGroup({
      reportName: new FormControl('', [Validators.required]),
      uploader: new FormControl('', [Validators.required]),
    })
  }
  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }
  sendReportData() {
    let eventData = new FormData();
    eventData.append('uploader', this.selectedFile, this.selectedFile.name);
    eventData.append('reportName', this.reportForm.get('reportName').value)
    // eventData.append('eventDate', this.eventForm.get('eventDate').value)

    axios.post(serverUrl + `reports/uploadReport`, eventData).then((response) => {
      console.log('gallery Add API is Called:');
      console.log(response);
      if (response) {
        this.reportForm.reset();
        this.toastr.success('Data is send Successfully');
      }
      else {
        this.toastr.error('Please try again', 'Something went wrong');
      }
    }).catch((error) => {
      console.log(error);
    });

  }
}

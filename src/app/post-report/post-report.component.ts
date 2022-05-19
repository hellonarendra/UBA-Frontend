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
  reportForm;
  getData;
  deleteRowId;
  finalData;

  constructor(private toastr: ToastrService) { }

  dtOptions: any = {};

  ngOnInit(): void {
    this.reportForm = new FormGroup({
      reportName: new FormControl('', [Validators.required]),
      uploader: new FormControl('', [Validators.required]),
    })

    axios.get(serverUrl + `reports/getAllReports`).then((response) => {
      this.getData = response.data.data;
      console.log('gallery Get API is Called:');
      console.log('getAllReports', this.getData);
      // if (response) {
      //   this.toastr.success('Data is send Successfully');
      // }
      // else {
      //   this.toastr.error('Please try again', 'Something went wrong');
      // }
    }).catch((error) => {
      console.log(error);
    });

    ///////////// Data Table ///////////////////

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthMenu: [5, 10, 25],
      dom: 'Bfrtip',
      // buttons: [
      //   'copy', 'csv', 'excel', 'print', 'pdf',
      //   //  {
      //   //     extend: 'pdfHtml5',
      //   //     messageTop: 'PDF created by PDFMake with Buttons for DataTables.'
      //   // }
      //   // 'copyHtml5','excelHtml5','csvHtml5','pdfHtml5'
      // ]
    };
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

  delete() {
    console.log("delete function is called ");
    console.log('finaldata', this.finalData);
    // axios.post(serverUrl + 'gallery/delete', this.deleteRowId).then((response) => {
    axios.post(serverUrl + 'reports/deleteReport', this.finalData).then((response) => {
      console.log(response);
      console.log("Delete Api successfully executed");
      if (response) {
        // this.eventForm.reset();
        this.toastr.success('Deleted Successfully', 'Congratulations');
      }
      else {
        this.toastr.error('Please try again', 'Something went wrong');
      }
    }).catch((error) => {
      console.log(error);
    });
  }


  deleteId(deleteId) {
    this.deleteRowId = deleteId;
    console.log("this is delete ID:", this.deleteRowId);
    const payload = {
      id: deleteId,
    }
    // this.deleteName.push(payload);
    this.finalData = payload;
  }

}

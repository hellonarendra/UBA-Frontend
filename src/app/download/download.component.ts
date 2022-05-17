import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  getData;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {

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

  }

  pdf = [
    {
      'name': 'Chawsa village Visit',
      'path': '../../assets/Chawsa village visit.pdf'
    },
    {
      'name': 'Dumehar village Visit',
      'path': '../../assets/Chawsa village visit.pdf'
    },
    {
      'name': 'Rijana village Visit ',
      'path': '../../assets/Chawsa village visit.pdf'
    },
    {
      'name': 'Motivational Seminor',
      'path': '../../assets/Chawsa village visit.pdf'
    },
  ]
  // doc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
}

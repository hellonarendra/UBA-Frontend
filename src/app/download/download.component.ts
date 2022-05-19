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

  dtOptions: any = {};

  ngOnInit(): void {

    axios.get(serverUrl + `reports/getAllReports`).then((response) => {
      this.getData = response.data.data;
      console.log('gallery Get API is Called:');
      console.log('getAllReports', this.getData);
    }).catch((error) => {
      console.log(error);
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthMenu: [5, 10, 25],
      dom: 'Bfrtip',
    };

  }
}

import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-admin-gallary',
  templateUrl: './admin-gallary.component.html',
  styleUrls: ['./admin-gallary.component.scss']
})
export class AdminGallaryComponent implements OnInit {
  getData;
  constructor() { }

  dtOptions: any = {};
  ngOnInit(): void {

    axios.get(serverUrl + 'user/getUbaMembers').then((response) => {
      this.getData = response.data.data;
      console.log(this.getData);
    }).catch((error) => {
      console.log(error);
    });
    console.log("get api call:")
    // console.log(this.jsonData);
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthMenu: [5, 10, 25],
      dom: 'Bfrtip',
    };

  }

}

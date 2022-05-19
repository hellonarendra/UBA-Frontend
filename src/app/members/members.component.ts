import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
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
      pageLength: 3,
      processing: true,
      lengthMenu: [5, 10, 25],
      dom: 'Bfrtip',
    };
  }

}

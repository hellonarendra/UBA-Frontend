import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;


@Component({
  selector: 'app-village-problem',
  templateUrl: './village-problem.component.html',
  styleUrls: ['./village-problem.component.scss']
})
export class VillageProblemComponent implements OnInit {
  formGroup: FormGroup;
  getData;
  jsonData = [{
    name: 'bvhgh',
    collage: 'narendra@yopmail.com',
  },
  {
    name: 'Messi',
    collage: 'narendra@yopmail.com',
  },
  {
    name: 'Messi',
    collage: 'narendra@yopmail.com',
  },
  ]
  constructor() { }

  dtOptions: any = {};
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      villageName: new FormControl('', [Validators.required]),
      villageProblem: new FormControl('', [Validators.required])
    })

    axios.get(serverUrl + 'chat/getComments').then((response) => {
      this.getData = response.data.data;
      console.log(this.getData);

    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthMenu: [5, 10, 25],
      dom: 'Bfrtip',
    };
  }

  sendProblem() {
    axios.post(serverUrl + 'chat/add', this.formGroup.value).then((response) => {
      console.log(response);
    })

  }

}

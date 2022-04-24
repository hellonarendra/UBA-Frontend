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

  sendProblem() {
    axios.post(serverUrl + 'chat/add', this.formGroup.value).then((response) => {
      console.log(response);
    })

  }

}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  deleteRowId;
  selectedFile: File;
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
  deleteId(deleteId) {
    this.deleteRowId = deleteId;
  }

  delete() {
    console.log("delete API is called ");

  }
}

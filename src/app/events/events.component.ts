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
  eventForm;
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
    this.eventForm = new FormGroup({
      eventName: new FormControl('', [Validators.required]),
      eventDate: new FormControl('', [Validators.required]),
      uploader: new FormControl('', [Validators.required]),
    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthMenu: [5, 10, 25],
      dom: 'Bfrtip',

    };
  }

  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }
  sendEventData() {
    let eventData = new FormData();
    eventData.append('uploader', this.selectedFile, this.selectedFile.name);
    eventData.append('eventName', this.eventForm.get('eventName').value)
    eventData.append('eventDate', this.eventForm.get('eventDate').value)

    axios.post(serverUrl + `gallery/add`, eventData).then((response) => {
      console.log('Sign up API is Called:');
      console.log(response);
      if (response) {
        this.eventForm.reset();
        //   this.toastr.success('Congratulations', 'Successfully signed up');
        //   // this.router.navigate(['/home'], { relativeTo: this.activatedRoute })
        // }
        // else {
        //   this.toastr.error('Please try again', 'Something went wrong');
      }
    }).catch((error) => {
      console.log(error);
    });

  }

  deleteId(deleteId) {
    this.deleteRowId = deleteId;
  }

  delete() {
    console.log("delete API is called ");
  }
}

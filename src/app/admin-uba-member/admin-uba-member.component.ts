import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-admin-uba-member',
  templateUrl: './admin-uba-member.component.html',
  styleUrls: ['./admin-uba-member.component.scss']
})
export class AdminUbaMemberComponent implements OnInit {
  deleteRowId;
  getData;
  eId;
  eName;
  eEmail;
  eMobile;
  eEnrollment;
  eBranch;
  fileName = [];
  uploadedFiles = [];
  images = [];
  selectedFile: File;
  editForm;
  // jsonData = [{
  //   name: 'bvhgh',
  //   collage: 'narendra@yopmail.com',
  //   phone: '5454555454',
  //   roll: 'yes',
  //   branch: 'yes'
  // },
  // {
  //   name: 'Messi',
  //   collage: 'narendra@yopmail.com',
  //   phone: '5454555454',
  //   roll: 'yes',
  //   branch: 'yes'
  // },
  // {
  //   name: 'Messi',
  //   collage: 'narendra@yopmail.com',
  //   phone: '5454555454',
  //   roll: 'yes',
  //   branch: 'yes'
  // },
  // ]

  // dtOptions: DataTables.Settings = {};
  // dataTable: any;
  // editForm = new FormGroup({
  //   name: new FormControl("", [Validators.required]),
  //   email: new FormControl("", [Validators.required]),
  //   enrollmentNo: new FormControl("", [Validators.required]),
  //   branch: new FormControl("", [Validators.required]),
  //   mobileNo: new FormControl("", [Validators.required]),
  //   uploader: new FormControl("", [Validators.required]),
  // });
  constructor(private modalService: NgbModal, config: NgbModalConfig,
    private cd: ChangeDetectorRef) { }
  dtOptions: any = {};

  ngOnInit(): void {
    this.editForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      enrollmentNo: new FormControl("", [Validators.required]),
      branch: new FormControl("", [Validators.required]),
      mobileNo: new FormControl("", [Validators.required]),
      uploader: new FormControl("", [Validators.required]),
    });

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
  deleteId(deleteId) {
    this.deleteRowId = deleteId;
  }
  editId(editId, name, email, mobile, enrollment, branch) {
    this.eId = editId;
    this.eName = name;
    this.eEmail = email;
    this.eMobile = mobile;
    this.eEnrollment = enrollment;
    this.eBranch = branch;
  }
  edit() {
    let editFormData = new FormData();
    editFormData.append('uploader', this.selectedFile, this.selectedFile.name);
    editFormData.append('name', this.editForm.get('name').value)
    editFormData.append('branch', this.editForm.get('branch').value)
    editFormData.append('mobileNo', this.editForm.get('mobileNo').value)
    editFormData.append('enrollmentNo', this.editForm.get('enrollmentNo').value)
    editFormData.append('email', this.editForm.get('email').value)

    // axios.post(serverUrl + 'user/update', this.editForm.value + this.eId).then((response) => {
    axios.post(serverUrl + 'user/update', editFormData, this.eId).then((response) => {
      console.log("This is Update API");
      console.log(editFormData + this.eId);

      console.log(this.eId);
      console.log(response);


    }).catch((error) => {
      console.log(error);
    });
    console.log("Edit function is called:");

  }

  delete() {
    console.log("Delete function is called:");
    axios.delete(serverUrl + 'delete/' + this.deleteRowId).then((response) => {
      console.log("This is Delete API");
      console.log(response);

    }).catch((error) => {
      console.log(error)
    })

  }
  onFileChange(event) {
    this.selectedFile = event.target.files[0];
  }
}

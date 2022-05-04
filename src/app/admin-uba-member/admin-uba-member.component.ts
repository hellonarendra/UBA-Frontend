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
  userID;
  fileName = [];
  uploadedFiles = [];
  images = [];
  selectedFile: File;
  editForm;
  deletePayload = {};
  constructor(private modalService: NgbModal, config: NgbModalConfig,
    private cd: ChangeDetectorRef) { }
  dtOptions: any = {};

  ngOnInit(): void {
    this.userID = 1;
    this.editForm = new FormGroup({
      // userId: this.userID,
      name: new FormControl("", [Validators.required]),
      // email: new FormControl("", [Validators.required]),
      // enrollmentNo: new FormControl("", [Validators.required]),
      branch: new FormControl("", [Validators.required]),
      mobileNo: new FormControl("", [Validators.required]),
      uploader: new FormControl("", [Validators.required]),
    });

    console.log("get api call:");
    axios.get(serverUrl + 'user/getUbaMembers').then((response) => {
      this.getData = response.data.data;
      console.log(this.getData);
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
    // this.uploadedFiles.forEach((res) => {
    //   console.log(res);
    //   editFormData.append('profilePhoto', res[0]);
    // });
    editFormData.append('userId', this.eId)
    editFormData.append('uploader', this.selectedFile);
    editFormData.append('name', this.editForm.get('name').value)
    editFormData.append('branch', this.editForm.get('branch').value)
    editFormData.append('mobileNo', this.editForm.get('mobileNo').value)
    // editFormData.append('enrollmentNo', this.editForm.get('enrollmentNo').value)
    // editFormData.append('email', this.editForm.get('email').value)
    console.log(editFormData);
    // const payload = {
    //   name: this.eName,
    //   userId: this.eId,
    //   mobileNo: this.eMobile,
    //   branch: this.eBranch,
    //   profilePhoto: this.selectedFile
    // }

    axios.post(serverUrl + 'user/update', editFormData).then((response) => {
      console.log("This is Update API");
      console.log(this.eId);
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
    console.log("Edit function is called:");
  }
  deleteId(deleteId) {
    this.deleteRowId = deleteId;
    console.log("deleteId id", this.deleteRowId);

  }
  delete() {
    // this.deletePayload = {
    //   id: this.deleteRowId
    // }
    const deletePayload = {
      id: this.deleteRowId
    }
    console.log("Delete function is called:");
    axios.post(serverUrl + 'user/delete', deletePayload).then((response) => {
      console.log(response);
      console.log("User/delete API is called ");
    }).catch((error) => {
      console.log(error)
    })
  }

  onFileChange(event) {
    // console.log(i);
    // this.edit
    this.selectedFile = event.target.files[0];
    // if (event.target.files && event.target.files[0]) {
    //   var filesAmount = event.target.files;
    //   this.fileName = event.target.files
    //   for (let i = 0; i < filesAmount.length; i++) {
    //     this.uploadedFiles.push(filesAmount);
    //     var reader = new FileReader();
    //     let type = filesAmount[i].type.split('/')
    //     reader.onload = (event: any) => {
    //       let obj = {
    //         'id': i,
    //         'src': event.target.result,
    //         'type': type[0]
    //       }
    //       this.images.push(obj);
    //       this.cd.detectChanges();
    //     }
    //     reader.readAsDataURL(event.target.files[i]);
    //     this.cd.markForCheck();
    //   }
    // }
  }
}

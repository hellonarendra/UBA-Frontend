import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-send-solution',
  templateUrl: './send-solution.component.html',
  styleUrls: ['./send-solution.component.scss']
})
export class SendSolutionComponent implements OnInit {
  getData;
  solutionForm;
  getId;
  constructor() { }

  ngOnInit(): void {
    this.solutionForm = new FormGroup({
      // villageName: new FormControl('', [Validators.required]),
      comments: new FormControl('', [Validators.required])
    })

    axios.get(serverUrl + 'chat/getComments').then((response) => {
      this.getData = response.data.data;
      console.log(this.getData);
      console.log(this.getData._id);

      this.getId = this.getData._id;
      console.log("this is id:" + this.getId);

    })
    // console.log(this.getId);

  }
  sendId(id) {
    console.log(id);
    axios.post(serverUrl + 'chat/pitchIdea', this.solutionForm.value, id).then((response) => {
      console.log(response);
    })
  }
  // sendSolution() {

  //   // console.log(id);
  // }

}

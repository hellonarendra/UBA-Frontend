import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThrowStmt } from '@angular/compiler';
import { data } from 'jquery';
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
  problem_id;
  probId;
  _id;
  questionAnswer = []
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    // this.probId = this.problem_id;
    // this.solutionForm = new FormGroup({
    //   // villageName: new FormControl('', [Validators.required]),
    //   // _id: this.probId,
    //   idea: new FormControl('', [Validators.required]),
    // })

    axios.get(serverUrl + 'chat/getComments').then((response) => {
      this.getData = response.data.data;
      console.log(this.getData);

      // console.log(this.getData._id);
      // this.getId = this.getData._id;
      // console.log("this is id:" + this.getId);

    })
    // console.log(this.getId);

  }

  formValue(data, problemId) {
    console.log('data from form', data.target.value);
    console.log('Question id', problemId);

    const payload = {
      idea: data.target.value,
      id: problemId,
      userId: 1
    }
    this.questionAnswer.push(payload);
  }


  sendId(idd) {
    let finalData = {};
    for (let i = 0; i < this.questionAnswer.length; i++) {
      let QuesId = this.questionAnswer[i].id;
      if (idd === QuesId) {
        finalData = this.questionAnswer[i];
        break;
      }
    }
    console.log('Final data:', finalData);
    axios.post(serverUrl + 'chat/pitchIdea', finalData).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
}

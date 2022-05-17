import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
const serverUrl = environment.baseUrl;

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  viewImg = false;
  mainImg = true;
  getData;
  showImage;

  constructor() { }

  ngOnInit(): void {
    axios.get(serverUrl + 'gallery/getAll').then((response) => {
      this.getData = response.data.data;
      console.log("this is getAll api:");
      console.log("Gallry images", this.getData);
    })
  }

  // images = ["../../assets/IMG_7437.JPG",
  //   "../../assets/IMG_7437.JPG",
  //   "../../assets/juit.jpg",
  //   "../../assets/juit.jpg",
  //   "../../assets/juit.jpg",
  //   "../../assets/juit1.jpg",
  //   "../../assets/juit2.jpg",
  //   "../../assets/IMG_7437.JPG",];

  showImg(eventPhotos) {
    // console.log(i);
    this.showImage = eventPhotos;
    console.log("this is image");
    this.viewImg = true;
    this.mainImg = false;
  }
  backButton() {
    console.log('this is back button');

    this.viewImg = false;
    this.mainImg = true;
  }
}

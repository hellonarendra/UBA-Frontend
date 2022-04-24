import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  viewImg = false;
  mainImg = true;
  constructor() { }

  ngOnInit(): void {
  }

  images = ["../../assets/IMG_7437.JPG",
    "../../assets/IMG_7437.JPG",
    "../../assets/juit.jpg",
    "../../assets/juit.jpg",
    "../../assets/juit.jpg",
    "../../assets/juit1.jpg",
    "../../assets/juit2.jpg",
    "../../assets/IMG_7437.JPG",];
  // gallaryImage: Array<object> = [
  //   {
  //     image: '../../assets/juit1.jpg',
  //   },
  //   {
  //     image: '../../assets/juit1.jpg',
  //   },
  //   {
  //     image: '../../assets/juit1.jpg',
  //   },
  //   {
  //     image: '../../assets/juit1.jpg',
  //   },
  //   {
  //     image: '../../assets/juit1.jpg',
  //   },
  // ]
  showImg(i) {
    console.log(i);
    console.log("this is image");
    this.viewImg = true;
    this.mainImg = false;
  }
}

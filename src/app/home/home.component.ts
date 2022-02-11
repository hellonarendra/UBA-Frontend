import { Component, OnInit } from '@angular/core';
import { NgImageSliderModule } from 'ng-image-slider';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [
    {
      image: '../../assets/juit1.jpg',
      thumbImage: '../../assets/juit1.jpg',
      title: 'Image title',
      alt: 'JUIT 1 image',
      // order: 1
    },
    {
      image: '../../assets/IMG_7437.JPG',
      thumbImage: '../../assets/IMG_7437.JPG',
      title: 'Group Photo',
      alt: 'Group Photo',
    },
    {
      image: '../../assets/juit.jpg',
      thumbImage: '../../assets/juit.jpg',
      title: 'Image title',
      alt: 'JUIT image',
    },

    {
      image: '../../assets/juit2.jpg',
      thumbImage: '../../assets/juit2.jpg',
      alt: 'JUIT 2 image',
      title: 'title of image'
    }
  ];

}

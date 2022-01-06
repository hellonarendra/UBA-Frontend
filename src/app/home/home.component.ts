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

  imageObject: Array<object> = [{
    // image: 'assets/img/slider/1.jpg',
    image: '../../assets/juit.jpg',
    thumbImage: '../../ assets/juit.jpg',
    alt: 'Juit of image',
    title: 'JUIT image'
  }, {
    image: '../../assets/juit1.jpg', // Support base64 image
    thumbImage: '../../assets/juit1.jpg', // Support base64 image
    title: 'Image title', //Optional: You can use this key if want to show image with title
    alt: 'JUIT 1 image', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
  }, {
    image: '../../assets/juit2.jpg',
    thumbImage: '../../assets/juit2.jpg',
    alt: 'JUIT 2 image',
    title: 'title of image'
  }
  ];

}

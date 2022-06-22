import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordinators',
  templateUrl: './coordinators.component.html',
  styleUrls: ['./coordinators.component.scss']
})
export class CoordinatorsComponent implements OnInit {

  cordi = [
    {
      id: '4',
      year: "2022-2023",
      mName: "Nishkarsh Sharma",
      fName: "Anushka Priya",
      mPhoto: "../../assets/Nishkarsh.jpg",
      fPhoto: "../../assets/Anushka.jpg",
      name1: "nddf",
      name2: "nddf",
      photo1: "../../assets/191337.jpg",
      photo2: "../../assets/191337.jpg",
    },
    {
      year: "2021-2022",
      mName: "Nishkarsh Sharma",
      fName: "Anushka Priya",
      mPhoto: "../../assets/Nishkarsh.jpg",
      fPhoto: "../../assets/Anushka.jpg"
    },
    {
      year: "2019-2020",
      mName: "Nishkarsh Sharma",
      fName: "Anushka Priya",
      mPhoto: "../../assets/Nishkarsh.jpg",
      fPhoto: "../../assets/Anushka.jpg"
    },
    {
      year: "2018-2019",
      mName: "Nishkarsh Sharma",
      fName: "Anushka Priya",
      mPhoto: "../../assets/Nishkarsh.jpg",
      fPhoto: "../../assets/Anushka.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

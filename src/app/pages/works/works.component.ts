import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  index: number | undefined;
  fields = [];

  constructor() {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("index")) {
      this.index = Number(sessionStorage.getItem("index"))
    }
    sessionStorage.removeItem("index");

    fetch('./assets/json/works-fields.json').then(res => res.json())
      .then(jsonData => {
        this.fields = jsonData;
      });
  }
}

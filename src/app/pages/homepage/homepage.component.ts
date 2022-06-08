import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  fields = [];
  constructor() { }

  ngOnInit(): void {
    fetch('./assets/json/works-fields.json').then(res => res.json())
      .then(jsonData => {
        this.fields = jsonData;
      });
  }
}

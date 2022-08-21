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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //TODO usare il locale storage invece del path param
    if (this.route.snapshot.paramMap.get("workIndex") !== null && this.route.snapshot.paramMap.get("workIndex") !== undefined) {
      this.index = Number(this.route.snapshot.paramMap.get("workIndex"));
    }
    fetch('./assets/json/works-fields.json').then(res => res.json())
      .then(jsonData => {
        this.fields = jsonData;
      });
  }
}

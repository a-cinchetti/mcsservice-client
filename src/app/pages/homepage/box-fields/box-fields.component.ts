import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {filter} from "rxjs";

@Component({
  selector: 'app-box-fields',
  templateUrl: './box-fields.component.html',
  styleUrls: ['./box-fields.component.scss']
})
export class BoxFieldsComponent implements OnInit {

  private fields = [
    {name: "ristrutturazione", active: false, index: 0},
    {name: "tinteggiatura", active: false, index: 1},
    {name: "nuovo", active: false, index: 2},
    {name: "altro", active: false, index: 3}
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  getName(index: number) {
    return this.fields.filter(el => el.index === index)[0].name;
  }

  getStatus(index: number) {
    return this.fields.filter(el => el.index === index)[0].active;
  }

  setActiveField(index: number) {
    this.fields.forEach( el => {
        el.active = el.index === index;
    })
  }

  goToContactsPage() {
    this.router.navigateByUrl("/contacts");
  }
}

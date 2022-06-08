import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-box-fields',
  templateUrl: './box-fields.component.html',
  styleUrls: ['./box-fields.component.scss']
})
export class BoxFieldsComponent implements OnInit, OnChanges {

  @Input()
  fields: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  getName(index: number) {
    return this.fields.filter((el: { index: number; }) => el.index === index)[0]?.name;
  }

  getStatus(index: number) {
    return this.fields.filter((el: { index: number; }) => el.index === index)[0]?.active;
  }

  setActiveField(index: number) {
    this.fields.forEach( (el: { active: boolean; index: number; }) => {
        el.active = el.index === index;
    })
    this.router.navigate(["/works", {workIndex: index}])
  }

  goToContactsPage() {
    this.router.navigateByUrl("/contacts");
  }
}

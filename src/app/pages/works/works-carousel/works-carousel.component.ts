import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-works-carousel',
  templateUrl: './works-carousel.component.html',
  styleUrls: ['./works-carousel.component.scss']
})
export class WorksCarouselComponent implements OnInit, OnChanges {

  @Input()
  fields: any = []
  @Input()
  indexSelected: number | undefined;
  private selected: boolean = false;
  private subFieldSelected: boolean = false;
  private subFieldNameSelected: any;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.indexSelected !== null && this.indexSelected !== undefined) {
      this.selected = true;
      this.setActiveField(this.indexSelected);
    }
  }

  ngOnInit(): void {
    if (this.indexSelected !== null && this.indexSelected !== undefined) {
      this.selected = true;
      this.setActiveField(this.indexSelected);
    }
  }

  tabSelected(index: any) {
    this.selected = true;
    if (this.indexSelected !== index) {
      this.setActiveField(index);
      this.indexSelected = index;
      this.resetSubFieldSelected();
    }
  }

  getSubFields() {
    if (this.indexSelected !== null && this.indexSelected !== undefined) {
      return this.fields.filter((el: { index: number; }) => el.index === this.indexSelected)[0]?.subFields;
    }
    return null;
  }

  setActiveField(index: number) {
    this.fields.forEach((el: { active: boolean; index: number; }) => {
      el.active = el.index === index;
    })
  }

  resetSubFieldSelected() {
    this.subFieldNameSelected = null;
    this.subFieldSelected = false;
  }

  getStatus(index: number) {
    return this.fields.filter((el: { index: number; }) => el.index === index)[0]?.active;
  }

  getStatusSubfield(subFieldName: string) {
    return subFieldName === this.subFieldNameSelected;
  }

  isNumberIndexSelected() {
    return this.indexSelected !== null && this.indexSelected !== undefined
  }

  setSubFieldSelected(subFieldName: string) {
    this.subFieldSelected = true;
    if (this.subFieldNameSelected !== subFieldName) {
      this.subFieldNameSelected = subFieldName;
    }
  }
}

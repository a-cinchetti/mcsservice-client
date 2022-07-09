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
  imagesList: string[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.indexSelected !== null && this.indexSelected !== undefined) {
      this.selected = true;
      this.setActiveField(this.indexSelected);
      if (!this.subFieldSelected) {
        this.setImagesListByDefault();
      }
    }
  }

  setImagesListBySubFields(imagesList: string[]) {
    this.imagesList = imagesList
  }

  setImagesListByDefault() {
    const subFields = this.getSubFields();
    this.imagesList = [];
    subFields?.forEach((el: any) => {
      this.imagesList = this.imagesList.concat(el.images);
    })
  }

  ngOnInit(): void {
    if (this.indexSelected !== null && this.indexSelected !== undefined) {
      this.selected = true;
      this.setActiveField(this.indexSelected);
      this.setImagesListByDefault();
    }
  }

  tabSelected(index: any) {
    this.selected = true;
    if (this.indexSelected !== index) {
      this.setActiveField(index);
      this.indexSelected = index;
      this.resetSubFieldSelected();
      this.setImagesListByDefault();
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

  setSubFieldSelected(subField: any) {
    this.subFieldSelected = true;
    if (this.subFieldNameSelected !== subField.name) {
      this.subFieldNameSelected = subField.name;
      this.setImagesListBySubFields(subField.images);
    } else {
      this.setImagesListByDefault();
      this.subFieldNameSelected = null;
    }
  }
}

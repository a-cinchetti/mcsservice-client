import {ChangeDetectorRef, Component, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

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
  subFieldNameSelected: any;
  enabled: boolean = true;
  imagesList: string[] = [];
  mobile: boolean = false;

  constructor(private changeDetector: ChangeDetectorRef){}

  reloadTree(){
    this.enabled = false;
    this.changeDetector.detectChanges();
    this.enabled = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.indexSelected !== null && this.indexSelected !== undefined) {
      this.selected = true;
      this.setActiveField(this.indexSelected);
      if (!this.subFieldSelected) {
        this.setImagesListByDefault();
      }
      const subFields = this.getSubFields()
      if (subFields) {
        this.setSubFieldSelected(subFields[0])
      }
    }
  }

  getTextOption(field: any) {
    if(field.type) {
      return field.type + " - " + field.name
    }
    return field.name
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
    this.setMobile(screen.width);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.setMobile(event.target.innerWidth);
  }

  setMobile(sizeScreen: number){
    const oldMobile = this.mobile;
    this.mobile = sizeScreen <= 992;
    if (oldMobile != this.mobile) {
      this.reloadTree();
    }
  }

  getName(index: number) {
    return this.fields.filter((el: { index: number; }) => el.index === index)[0]?.name;
  }

  getLocation(index: number) {
    return this.fields.filter((el: { index: number; }) => el.index === index)[0]?.location;
  }

  getType(index: number) {
    return this.fields.filter((el: { index: number; }) => el.index === index)[0]?.type;
  }

  tabSelected(index: any) {
    this.selected = true;
    if (this.indexSelected !== index) {
      this.setActiveField(index);
      this.indexSelected = index;
      this.resetSubFieldSelected();
      this.setImagesListByDefault();
      const subFields = this.getSubFields()
      if (subFields) {
        this.setSubFieldSelected(subFields[0])
      }
      this.reloadTree();
    }
  }

  getSubFields(): any[] | null {
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
      this.reloadTree();
    }
  }

  setSubFieldDefault() {
    this.setImagesListByDefault();
    this.subFieldNameSelected = "all";
    this.reloadTree();
  }

  fieldChangeSelect(event: any) {
    this.tabSelected(event.value);
  }

  subfieldChangeSelect(event: any) {
    this.setSubFieldSelected(this.getSubFields()?.filter((el: { name: string; }) => el.name === event.value)[0]);
  }
}

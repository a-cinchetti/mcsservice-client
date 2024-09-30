import {Component, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentLang = 'it-IT';

  constructor(private router: Router, private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang;
  }

  goToWorksPage() {
    this.router.navigateByUrl("/works");
  }

  goToContactsPage() {
    this.router.navigateByUrl("/contacts");
  }

  goToHomepage() {
    this.router.navigateByUrl("");
  }

  changeLanguage($event: MatSelectChange) {
    console.log($event.value);
    this.translateService.use($event.value);
    this.currentLang = $event.value;
  }
}

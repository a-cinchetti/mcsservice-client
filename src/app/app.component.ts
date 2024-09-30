import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mcsservice-client';

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.translateService.setDefaultLang('it-IT');
    this.translateService.use('it-IT');
  }
}

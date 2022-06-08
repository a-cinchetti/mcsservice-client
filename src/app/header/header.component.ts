import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}

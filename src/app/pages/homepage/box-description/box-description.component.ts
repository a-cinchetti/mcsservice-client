import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-box-description',
  templateUrl: './box-description.component.html',
  styleUrls: ['./box-description.component.scss']
})
export class BoxDescriptionComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToContactsPage() {
    this.router.navigateByUrl("/contacts");
  }

}

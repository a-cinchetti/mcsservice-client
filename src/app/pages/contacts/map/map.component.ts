import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  marker: any = {}
  mapCenter: any = {}
  mapOptions: any = {}

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.mapOptions= {
      streetViewControl: false,
      fullscreenControl: false,
      disableDefaultUI: true,
      draggable: false
    }
    this.mapCenter = {
      lat: 45.71653508408972,
      lng: 9.886690557846206,
    }

    this.marker = {
      position: this.mapCenter
    }
  }

  prova() {
    const url = `www.google.com/maps/place/Via+Nazionale,+2,+24060+Borgo+di+terzo+BG`
    window.open('https://' + url, "_blank");
  }
}

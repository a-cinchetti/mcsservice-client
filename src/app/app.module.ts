import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {InlineSVGDirective, InlineSVGModule} from 'ng-inline-svg-2';
import {HttpClientModule} from "@angular/common/http";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyMenuModule as MatMenuModule} from "@angular/material/legacy-menu";
import {MatIconModule} from "@angular/material/icon";
import {MAT_LEGACY_SELECT_SCROLL_STRATEGY as MAT_SELECT_SCROLL_STRATEGY} from "@angular/material/legacy-select";
import {BlockScrollStrategy, Overlay} from "@angular/cdk/overlay";

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    { provide: MAT_SELECT_SCROLL_STRATEGY, useFactory: scrollFactory, deps: [Overlay] }
  ],
  bootstrap: [AppComponent],
  exports: [
    InlineSVGDirective
  ]
})
export class AppModule {
}

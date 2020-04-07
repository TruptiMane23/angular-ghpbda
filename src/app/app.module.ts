import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselConfig } from '@ng-bootstrap/carousel-config';


@NgModule({
  imports:      [ BrowserModule, FormsModule,    NgbModule ],
  declarations: [ AppComponent, HelloComponent, NgbdCarouselConfig ],
  exports: [NgbdCarouselConfig],
  bootstrap:    [ AppComponent, NgbdCarouselConfig ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule }    from '@angular/common/http';
import { ImageFormatterComponent } from './image-formatter/image-formatter.component';
import { UrlFormatterComponent } from './url-formatter/url-formatter.component';

import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    AppComponent,
    ImageFormatterComponent,
    UrlFormatterComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([ImageFormatterComponent, UrlFormatterComponent]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

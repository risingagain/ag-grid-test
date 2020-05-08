import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-url-formatter',
  templateUrl: './url-formatter.component.html',
  styleUrls: ['./url-formatter.component.scss']
})
export class UrlFormatterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  params: any;
  agInit(params: any){
    this.params = params;
  }
}

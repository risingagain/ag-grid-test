import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-formatter',
  templateUrl: './image-formatter.component.html',
  styleUrls: ['./image-formatter.component.scss']
})
export class ImageFormatterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  params: any;
  agInit(params: any){
    this.params = params;
  }

}

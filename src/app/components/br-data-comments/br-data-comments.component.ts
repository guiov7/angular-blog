import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-br-datacomments',
  templateUrl: './br-data-comments.component.html',
  styleUrls: [ './br-data-comments.css' ]
})

export class AppBrDataComments implements OnInit {
  watchImg:string = 'watch-icon.svg'
  data: string = "21 Nov 2024";
  chatImg:string = 'comments-icon.svg'
  qtd: number = 14;
  constructor() {

  }

  ngOnInit() {

  }
}

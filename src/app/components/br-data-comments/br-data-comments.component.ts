import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-br-datacomments',
  templateUrl: './br-data-comments.component.html',
  styleUrls: [ './br-data-comments.css' ]
})

export class AppBrDataComments implements OnInit {
  data: string = "21 Nov 2024";
  qtd: number = 14;
  constructor() {

  }

  ngOnInit() {

  }
}

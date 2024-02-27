import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.css']
})
export class MediumCardComponent implements OnInit {
  title:string = "Amazing experience travelling on mountains"
  title2:string = "Nothing to say but needs other title"
  description:string = "Pellentesque auctor elementum lectus, in suscipit arcu facilisis quis. Integer vel pulvinar eros. Nullam euismod nibh a erat sodales elementum"
  constructor() { }

  ngOnInit(): void {
  }

}

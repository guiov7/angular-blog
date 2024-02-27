import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  title:string = 'Great title for a small card';
  description:string = 'Pellentesque auctor elementum lectus, in suscipit arcu facilisis quis. Integer vel pulvinar eros. Nullam euismod nibh a erat sodales elementum';

  constructor() { }

  ngOnInit(): void {
  }

}

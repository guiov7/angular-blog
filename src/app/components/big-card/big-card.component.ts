import { Component, OnInit } from '@angular/core';
import { AppBrDataComments } from '../../components/br-data-comments/br-data-comments.component'

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  photoCover:string = 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
  title:string = "Amazing experience travelling on mountains"
  description:string = "Do your own food, like a viking and feels a heart break long long ago in a darkness forest  Nunc vel pharetra est, eu sodales ligula. Donec volutpat ut urna eu fringilla."
  constructor() { }

  ngOnInit(): void {
  }

}

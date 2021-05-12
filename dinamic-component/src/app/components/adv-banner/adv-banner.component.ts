import { Component, Input, OnInit } from '@angular/core';
import { BaseBannerComponent } from '../base-banner/base-banner';

@Component({
  selector: 'app-adv-banner',
  templateUrl: './adv-banner.component.html',
  styleUrls: ['./adv-banner.component.css']
})
export class AdvBannerComponent implements OnInit, BaseBannerComponent {

  constructor() { }
  
  @Input()
  data: any;

  ngOnInit(): void {
  }
}

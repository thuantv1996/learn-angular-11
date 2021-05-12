import { Component, Input, OnInit } from '@angular/core';
import { BaseBannerComponent } from '../base-banner/base-banner';

@Component({
  selector: 'app-course-banner',
  templateUrl: './course-banner.component.html',
  styleUrls: ['./course-banner.component.css']
})
export class CourseBannerComponent implements OnInit, BaseBannerComponent{

  constructor() { }

  @Input()
  data: any;

  ngOnInit(): void {
  }
}

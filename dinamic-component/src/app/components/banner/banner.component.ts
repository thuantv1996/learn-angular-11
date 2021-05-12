import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { BannerDirective } from 'src/app/directives/banner-directive';
import { AdvBannerComponent } from '../adv-banner/adv-banner.component';
import { CourseBannerComponent } from '../course-banner/course-banner.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild(BannerDirective, {static: true}) banner!: BannerDirective;

  interval: any;
  isCourse = true;

  ngOnInit(): void {
    this.show();
    this.run();
  }
  
  run(){
    if(this.interval != undefined){
      this.interval = undefined;
    }

    this.interval = setInterval(()=>{
      this.isCourse = !this.isCourse;
      this.show();
    }, 3000);
  }

  show(){
    let compResolver = undefined;
    if(this.isCourse)
      compResolver = this.componentFactoryResolver.resolveComponentFactory(CourseBannerComponent);
    else
      compResolver = this.componentFactoryResolver.resolveComponentFactory(AdvBannerComponent)
    
    const viewRef = this.banner.viewContainerRef;
    viewRef.clear();

    const compRef = viewRef.createComponent(compResolver);

    

    if(this.isCourse)
      compRef.instance.data = {title: "Đăng ký khóa học!"};
    else
      compRef.instance.data = {title: "Quảng cáo khóa học!"};
  }
}

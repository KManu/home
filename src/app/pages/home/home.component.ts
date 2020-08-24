import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { ConstantsService } from '@core/services/constants.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('#animate') container: ElementRef;

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  constructor(
    private ngRender: Renderer2,
    private el: ElementRef,
    private constantsService: ConstantsService
  ) { }

  ngOnInit() {
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = this.constantsService.particlesConfig;
    console.log(this.myParams)
  }



}

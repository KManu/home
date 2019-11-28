import {MediaMatcher} from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = 'Home.';
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    /*  TODO: Change breakpoint detection method to use CDKs Breakpoint observers and breakpointstate
    ref: https://alligator.io/angular/breakpoints-angular-cdk/
    */
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy(){}

}

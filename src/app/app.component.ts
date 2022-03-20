import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ConstantsService } from '@core/services/constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Home.';
  mobileQuery: MediaQueryList;

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  particlesConfig;

  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private constantsService: ConstantsService) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    /*  TODO: Change breakpoint detection method to use CDKs Breakpoint observers and breakpointstate
    ref: https://alligator.io/angular/breakpoints-angular-cdk/
    */
    this.mobileQuery.addListener(this.mobileQueryListener);

  }

  ngOnInit() {
    this.particlesConfig = this.constantsService.defaultParticlesConfig;
  }

  ngOnDestroy() { }

}

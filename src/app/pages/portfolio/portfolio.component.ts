import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: FolioItem[] = [
    {
      name: 'Mazzuma Mobile App',
      link: 'https://play.google.com/store/apps/details?id=com.cyst.mazzumapp&hl=en',
      description: 'Cross platform app for mobile money payments.'
    },
    {
      name: 'Mazzuma Website',
      link: 'https://mazzuma.com',
      description: 'Mazzuma product website.'
    },
    {
      name: 'Mazzuma Keyboard',
      link: 'https://play.google.com/store/apps/details?id=com.cyst.mazzumapp&hl=en',
      description: 'Android keyboard implemented as a Cordova plugin.Android keyboard implemented as a Cordova plugin'
    },
    {
      name: 'Mazzuma WooCommerce Plugin',
      link: 'https://wordpress.org/plugins/woo-mazzuma-payment-gateway/',
      description: 'WordPress payment plugin for Mazzuma.'
    },
    {
      name: 'Mazzuma Developer Documentation',
      link: 'https://developer.teamcyst.com',
      description: 'Developer Documentation for Mazzuma.'
    },
    {
      name: 'Ghana Waste Platform Website',
      link: 'http://ghanawasteplatform.org/',
      description: 'Website for the Ghana Waste Platform.'
    },
    {
      name: 'CYST Insurance Hub',
      link: 'https://insurance.teamcyst.com',
      description: 'System for insurance claim management.'
    },
    {
      name: 'Insights By CYST',
      link: 'https://insights.teamcyst.com',
      description: 'Article and social media sentiment analysis tool.'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface FolioItem {
  name: string;
  link: string;
  description: string;
}

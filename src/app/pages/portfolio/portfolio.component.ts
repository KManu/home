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
      description: 'Cross platform mobile app for mobile money and cryptocurrency payments in Ghana.'
    },
    {
      name: 'Mazzuma Website',
      link: 'https://mazzuma.com',
      description: 'Mazzuma product website. Mazzuma is a financial service that allows users to make payments using mobile money.'
    },
    {
      name: 'Mazzuma Keyboard',
      link: 'https://play.google.com/store/apps/details?id=com.cyst.mazzumapp&hl=en',
      description: 'Android keyboard implemented as a Cordova plugin. This was implemented as part of the Mazzuma app and created an android keyboard that users could use to send money without switching to the main Mazzuma app.'
    },
    {
      name: 'Mazzuma WooCommerce Plugin',
      link: 'https://wordpress.org/plugins/woo-mazzuma-payment-gateway/',
      description: 'WordPress plugin for Mazzuma. This enabled users to receive mobile money payments in their WooCommerce shops.'
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
      description: 'Sentiment analysis tool for website articles and tweets. Feed it a link and it would retrieve the article or tweet contents and give you it\'s sentiment.'
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: FolioItem[] = [
    {
      name: 'Akkadian Provisioning Manager',
      link: 'https://bit.ly/3P2RQVk',
      description: 'This is a system designed to integrate with Unified Communications environments for businesses such as Cisco Collaboration, Webex and Microsoft Teams, and provide an easy way for business to provision and manage users and devices in these environments. As a full stack software engineer I was responsible for maintenance and enhancements across the application stack.',
      stack: ['HTML', 'CSS', 'Javascript','PHP','Jenkins','Git','systemd','RPM Package Development','Python']
    },
    {
      name: 'Mazzuma Mobile App',
      link: 'https://play.google.com/store/apps/details?id=com.cyst.mazzumapp&hl=en',
      description: 'This is a cross platform mobile app for mobile money and cryptocurrency payments and services in Ghana. I was in charge of the creation and maintenance of the mobile application, as well as some aspects of it\'s backend architecture.',
      stack: ['Angular','Ionic','NodeJS','HTML','ExpressJS','CSS','Typescript','MySQL', 'Cordova']
    },
    {
      name: 'Mazzuma Website',
      description: 'The Mazzuma product website. Mazzuma is a financial service that allows users to make payments using mobile money and cryptocurrencies. I was responsible for the creation and maintenance of website.',
      stack: ['HTML','CSS','Javascript','PHP']
    },
    {
      name: 'Mazzuma Keyboard',
      link: 'https://play.google.com/store/apps/details?id=com.cyst.mazzumapp&hl=en',
      description: 'This was created to be a plugin for the Mazzuma app and was designed to be an android keyboard that users could use to send money without switching to the main Mazzuma app.',
      stack: ['Ionic','Cordova Plugin Development','Java','Android App Development']
    },
    {
      name: 'Mazzuma WooCommerce Plugin',
      link: 'https://wordpress.org/plugins/woo-mazzuma-payment-gateway/',
      description: 'WordPress plugin for Mazzuma. This enabled users to receive mobile money payments in their WooCommerce shops, using the Mazzuma service.',
      stack: ['PHP','Wordpress plugin development','SVN']
    },
    {
      name: 'Mazzuma Developer Documentation',
      link: 'https://developer.teamcyst.com',
      description: 'Developer Documentation for Mazzuma.',
      stack: ['Slate']
    },
    {
      name: 'Ghana Waste Platform Website',
      link: 'http://ghanawasteplatform.org/',
      description: 'Website for the Ghana Waste Platform.',
      stack: ['Drupal 8','HTML','CSS','Javascript']
    },
    {
      name: 'CYST Insurance Hub',
      link: 'https://insurance.teamcyst.com',
      description: 'System for insurance claim management.',
      stack: ['AngularJS','HTML','CSS','Javascript']
    },
    {
      name: 'Insights By CYST',
      link: 'https://insights.teamcyst.com',
      description: 'Sentiment analysis tool for website articles and tweets. Feed it a link and it would retrieve the article or tweet contents and give you it\'s sentiment. I created this as a side project exploring the applications of AI.',
      stack: ['AngularJS','NodeJS','Sentiment Analysis']
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface FolioItem {
  name: string;
  link?: string;
  description: string;
  stack: Array<string>;
}

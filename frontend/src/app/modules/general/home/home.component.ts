import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SeoService } from '../../../services/seo/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  user_name = environment.constant.user_name;
  user_skill = environment.constant.user_skill;
  user_bio0 = environment.constant.user_bio0;
  user_bio1 = environment.constant.user_bio1;
  user_mask = environment.constant.user_mask;

  items = [
    {
      link: '/mean',
      icon: 'fa-angular',
      title: 'MEAN',
      disc: '6+ years of rich experience and built 22 websites'
    },
    {
      link: '/mern',
      icon: 'fa-react',
      title: 'MERN',
      disc: '4+ years of enough experience and built 17 websites'
    },
    {
      link: '/shopify',
      icon: 'fa-shopify',
      title: 'Shopify',
      disc: '2+ years of experience and built 10 shopify stores'
    },
    {
      link: '/blockchain',
      icon: 'fa-vuejs',
      title: 'Blockchain',
      disc: '4+ years of enough experience in Solidity and Rust'
    },
    {
      link: '/mobile',
      icon: 'fa-android',
      title: 'Mobile',
      disc: '2+ years of Android, iOS, Fultter and React Native'
    },
    {
      link: '/grafana',
      icon: 'fa-algolia',
      title: 'Grafana+MongoDB',
      disc: 'rich experience with MongoDB resource in Grafana'
    },
    {
      link: '/java',
      icon: 'fa-java',
      title: 'C/C++/Java',
      disc: '2+ years of software development with C/C++/JAVA'
    }
  ]

  constructor(private seoService: SeoService) {
  }
}

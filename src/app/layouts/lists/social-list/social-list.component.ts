import {Component, Input, OnInit} from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faFacebook, faInstagram, faTelegram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-list',
  templateUrl: './social-list.component.html',
  styleUrls: ['./social-list.component.scss']
})
export class SocialListComponent implements OnInit {
  faCoffee = faCoffee;

  constructor(private library: FaIconLibrary) {
    library.addIcons( faFacebook, faGithub, faInstagram, faTelegram);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  bannerUrl = 'https://firebasestorage.googleapis.com/v0/b/angular-fb-e657d.appspot.com/o/banner-about-1920x600.jpg?alt=media&token=a286859a-b8f8-424e-a90d-49768b96f614';

  constructor() { }

  ngOnInit() {
  }

}

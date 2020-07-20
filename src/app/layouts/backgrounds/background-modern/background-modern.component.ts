import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-background-modern',
  templateUrl: './background-modern.component.html',
  styleUrls: ['./background-modern.component.scss']
})
export class BackgroundModernComponent implements OnInit {

  @Input() bannerBg: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Constants } from '../../common/constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = Constants.APP_TITLE;

  constructor() { }

  ngOnInit() {
  }

}

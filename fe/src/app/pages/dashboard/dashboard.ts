import { Component } from '@angular/core';
import {ScanPage} from './scan-page/scan-page';

@Component({
  selector: 'app-dashboard',
  imports: [
    ScanPage
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}

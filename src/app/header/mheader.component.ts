import { Component } from '@angular/core';

@Component({
  selector: 'lesson-header',
  templateUrl: './mheader.component.html',
  styleUrls: ['./mheader.component.css']
})
export class MheaderComponent {
  loginStatus = '登出';
}

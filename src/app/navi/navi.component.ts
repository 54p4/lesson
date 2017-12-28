import { Component, OnInit } from '@angular/core';
import { EmitService } from '../service/emit.service';


@Component({
  selector: 'lesson-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})

export class NaviComponent implements OnInit {

  display = 'inline-block';
  widthStyle = {
    'width': '83%'
  };
  constructor(private emitService: EmitService) {

  }

  ngOnInit() {
    this.emitService.eventEmit.subscribe(data => {

      if (data === 'naviHidden') {
        this.display = 'none';
        this.widthStyle = {
          'width': '100%'
        };
      } else if (data === 'naviShow') {
        this.display = 'inline-block';
        this.widthStyle = {
          'width': '83%'
        };
      }
    });
  }
}

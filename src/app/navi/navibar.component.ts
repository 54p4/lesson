import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navigation, NaviService } from '../service/navi.service';
import { EmitService } from '../service/emit.service';

@Component({
  selector: 'lesson-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css']
})

export class NavibarComponent implements OnInit {
  navis: Navigation[] = [];
  search = '';
  orgNavis: Navigation[] = [];
  constructor(private service: NaviService, private router: ActivatedRoute, private emitService: EmitService) {

  }
  ngOnInit() {
    this.getNavi();
    this.emitService.eventEmit.subscribe(data => {
      if (data === 'adder') {
        this.getNavi();
      }
    });
  }
  getNavi() {
    this.service.getNavi().subscribe(data => {
      this.navis = data;
      this.orgNavis = data;
    });
  }
  onEnter() {
    const snavis: Navigation[] = [];
    if (this.search !== '' && this.search !== null) {
      for (const nv of this.navis) {
        if (nv.title.startsWith(this.search)) {
          snavis.push(nv);
        }
      }
      this.navis = snavis;
    } else {
      this.navis = this.orgNavis;
    }
  }
}

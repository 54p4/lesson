import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navigation, NaviService } from '../service/navi.service';
import { EmitService } from '../service/emit.service';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';


export interface NaviState {
  navi: string;
}


@Component({
  selector: 'lesson-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css']
})

export class NavibarComponent implements OnInit {
  navis: Navigation[] = [];
  search = '';
  orgNavis: Navigation[] = [];
  hello: Observable<string>;
  constructor(private service: NaviService, private router: ActivatedRoute,
    private emitService: EmitService, private store$: Store<NaviState>) {
    this.hello = this.store$.select('navi');
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

import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

export class Navigation {
  lessonid: string;
  title: string;
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

  constructor(private http: Http, private router: ActivatedRoute) {

  }
  ngOnInit() {
    this.getNavi();
  }
  getNavi() {
    this.http.get('/proxy/navi').subscribe((data) => {
      this.navis = data.json();
      this.orgNavis = data.json();
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

import { Component } from '@angular/core';
import { Http } from '@angular/http';

export class Navigation {
  id: string;
  title: string;
}

@Component({
  selector: 'lesson-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})

export class NaviComponent {
  navis: any[] = [];

  constructor(private http: Http) {
    this.http.get('/proxy/navi').subscribe((data) => {
      this.navis = data.json();
    });
  }
}

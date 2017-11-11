import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


export class Words {
  japanese: string;
  chinese: string;
  english: string;
  example: string;
  title: string;
  lessonid: string;
}


@Component({
  selector: 'lesson-wdeditor',
  templateUrl: './wdeditor.component.html',
  styleUrls: ['./wdeditor.component.css']
})


export class WdEditorComponent implements OnInit, OnDestroy {

  word: Words = new Words();

  sub: any;

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
    });
  }
  onEnter() {
    this.http.post('/proxy/word/save', this.word).subscribe();
    this.word = new Words();
  }
  ngOnDestroy() {

  }
}

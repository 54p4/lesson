import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';


export class Words {
  japanese: string;
  chinese: string;
  english: string;
  example: string;
  title: string;
  lessonId: string;
}


@Component({
  selector: 'lesson-wdeditor',
  templateUrl: './wdeditor.component.html',
  styleUrls: ['./wdeditor.component.css']
})


export class WdEditorComponent implements OnInit {

  word: Words = new Words();

  constructor(private route: ActivatedRoute, private http: Http) { }

  ngOnInit() {

  }
  onEnter() {
    this.http.post('/proxy/word/save', this.word).subscribe();
    this.word = new Words();
  }
}

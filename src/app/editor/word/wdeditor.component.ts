import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService, Words } from '../../service/word.service';

import { EmitService } from '../../service/emit.service';


@Component({
  selector: 'lesson-wdeditor',
  templateUrl: './wdeditor.component.html',
  styleUrls: ['./wdeditor.component.css']
})


export class WdEditorComponent implements OnInit, OnDestroy {
  lessonid: string;
  title: string;
  word: Words = new Words();
  wordList: Words[] = [];

  sub: any;

  constructor(private route: ActivatedRoute, private service: WordService, private emitService: EmitService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const lessonid = params['id'];
      this.service.initWord(lessonid).subscribe(data => {
        this.word = data;
        //  can not point to the same object, if this.orgWord =data means this.orgWord=this.word; WTF
        this.lessonid = data.lessonid;
        this.title = data.title;
      });
      this.getWordsByID(lessonid);
    });
    this.emitService.eventEmit.subscribe(data => {
      if (data === 'worddelete') {
        this.getWordsByID(this.lessonid);
      }
    });
  }

  getWordsByID(lessonid) {
    this.service.getWordsByID(lessonid).subscribe(data => {
      this.wordList = data;
      // console.log(this.words);
    });
  }

  onEnter() {
    if (this.word.japanese !== '' && this.word.japanese != null
      && this.word.chinese !== '' && this.word.chinese != null) {
      this.service.saveWord(this.word).subscribe(data => {
        this.word = new Words();
        this.word.setLessonidAndTitle(this.lessonid, this.title);
        this.getWordsByID(this.lessonid);
      });
    }

  }
  ngOnDestroy() {

  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Words {
    word: string;
    chinese: string;
    english: string;
    example: string;
  }


@Component({
  selector: 'lesson-wdeditor',
  templateUrl: './wdeditor.component.html',
  styleUrls: ['./wdeditor.component.css']
})


export class WdEditorComponent implements OnInit {

  title= 'わたし';
  content= '# hello';
  
  word :Words =new Words();
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    
  }
  onEnter(value: string) { console.log(this.word) }
}

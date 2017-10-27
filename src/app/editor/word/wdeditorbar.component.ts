import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Words } from './wdeditor.component';

@Component({
    selector: 'lesson-wdeditorbar',
    templateUrl: './wdeditorbar.component.html',
    styleUrls: ['./wdeditor.component.css']
})


export class WdEditorBarComponent implements OnInit {

    word: Words = new Words();

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {

    }
    onEnter(value: string) { console.log(this.word) }
    delete(){
        console.log("delete");
        console.log(this.word);
        this.word= new Words();
        console.log(this.word)
    }
}

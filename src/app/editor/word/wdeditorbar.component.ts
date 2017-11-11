import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Words } from './wdeditor.component';

@Component({
    selector: 'lesson-wdeditorbar',
    templateUrl: './wdeditorbar.component.html',
    styleUrls: ['./wdeditor.component.css']
})


export class WdEditorBarComponent implements OnInit {

    word: Words = new Words();

    constructor(private route: ActivatedRoute, private http: Http) { }

    ngOnInit() {

    }
    onEnter(value: string) {
        this.http.post('/proxy/word/update', this.word).subscribe();
        this.word = new Words();

    }
    delete() {
        console.log('delete');
        console.log(this.word);
        this.word = new Words();
        console.log(this.word);
    }
}

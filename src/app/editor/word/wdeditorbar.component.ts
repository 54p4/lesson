import { Component, OnInit, Input } from '@angular/core';
import { WordService, Words } from '../../service/word.service';

@Component({
    selector: 'lesson-wdeditorbar',
    templateUrl: './wdeditorbar.component.html',
    styleUrls: ['./wdeditor.component.css']
})


export class WdEditorBarComponent implements OnInit {


    word: Words = new Words();

    @Input() set wordValue(value: any) {
        this.word = JSON.parse(value);
    }


    constructor(private service: WordService) { }

    ngOnInit() {

    }
    onEnter(value: string) {
        this.service.updateWord(this.word).subscribe();
    }
    delete() {
        this.service.deleteWord(this.word.id).subscribe();
    }
}

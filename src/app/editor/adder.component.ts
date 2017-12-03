import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Lessons, LessonService } from '../service/lesson.service';
import { NaviService } from '../service/navi.service';
import { EmitService } from '../service/emit.service';
import { Store } from '@ngrx/store';

@Component({
    selector: 'lesson-adder',
    templateUrl: './adder.component.html',
    styleUrls: ['./adder.component.css']
})



export class AdderComponent implements OnInit, OnDestroy {

    lesson: Lessons = new Lessons('', '');
    sub: any;

    constructor(private router: Router, private lessonService: LessonService,
        private emitService: EmitService, private store: Store<any>) { }

    ngOnInit() {

    }
    onSubmit() {
        this.lessonService.saveLesson(this.lesson).subscribe(
            data => {
                this.emitService.eventEmit.emit('adder');
                this.store.dispatch({ type: 'adder' });
                this.router.navigate([this.router.url, data]);
            });
    }
    ngOnDestroy() {

    }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Lessons, LessonService } from '../service/lesson.service';


@Component({
    selector: 'lesson-adder',
    templateUrl: './adder.component.html',
    styleUrls: ['./adder.component.css']
})



export class AdderComponent implements OnInit, OnDestroy {

    lesson: Lessons = new Lessons('', '');
    sub: any;

    constructor(private router: Router, private service: LessonService) { }

    ngOnInit() {

    }
    onSubmit() {
        this.service.saveLesson(this.lesson).subscribe(
            data => {
                this.router.navigate([this.router.url, data]);
            });
    }
    ngOnDestroy() {

    }
}

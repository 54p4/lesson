import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { Lessons, LessonService } from '../service/lesson.service';
import { Http } from '@angular/http';

@Component({
  selector: 'lesson-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  lesson: Lessons = new Lessons('', '');
  sub: any;

  constructor(private route: ActivatedRoute, private service: LessonService) {

  }
  ngOnInit() {
    //  this param must subscribe, perhaps, url changed but component did not change
    this.sub = this.route.params.subscribe(params => {
      const lessonid = params['id'];
      this.service.getLessonByID(lessonid).subscribe(data => {
        this.lesson = data;
      });
    });
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Lessons, LessonService } from '../../service/lesson.service';

@Component({
  selector: 'lesson-txteditor',
  templateUrl: './txteditor.component.html',
  styleUrls: ['./txteditor.component.css']
})
export class TxtEditorComponent implements OnInit, OnDestroy {
  lesson: Lessons = new Lessons('わたし', '# hello');
  sub: any;
  constructor(private route: ActivatedRoute, private service: LessonService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const lessonid = params['id'];
      this.service.getLessonByID(lessonid).subscribe(data => {
        this.lesson = data;
      });
    });
  }
  save() {
    this.service.updateLesson(this.lesson);
  }
  ngOnDestroy(): void {
    // this unsubscribe is unnecessarily, ng will manage it
    this.sub.unsubscribe();
  }
}

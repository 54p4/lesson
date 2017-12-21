import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class Lessons {
  title: string;
  type: string;
  lessonid: string;
  lesson: string;

  constructor(title, lesson) {
    this.title = title;
    this.lesson = lesson;
  }
}


@Injectable()
export class LessonService {

  constructor(private http: Http) {

  }

  getLessonByID(lessonid: string) {
    let lesson: Lessons = new Lessons('わたし', '# hello');
    return this.http.post('/proxy/lesson', { 'lessonid': lessonid })
      .map(data => {
        const l = data.json();
        if (Object.keys(l).length > 0) {
          lesson = l;
        }
        return lesson;
      });
  }
  saveLesson(lesson: Lessons) {
    return this.http.post('/proxy/lesson/save', lesson).map(param => {
      return param.text();
    });

  }
  updateLesson(lesson: Lessons) {
    this.http.post('/proxy/lesson/update', lesson).subscribe();
  }
  deleteLesson(lesson: Lessons) {
    this.http.post('/proxy/lesson/delete', lesson).subscribe();
  }
}

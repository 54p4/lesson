import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


export class Words {
    id: string;
    japanese: string;
    chinese: string;
    english: string;
    example: string;
    title: string;
    lessonid: string;
    setLessonidAndTitle(lessonid: string, title: string) {
        this.lessonid = lessonid;
        this.title = title;
    }
}

@Injectable()
export class WordService {

    constructor(private http: Http) {

    }
    initWord(lessonid: string) {
        const word = new Words();
        return this.http.post('/proxy/lesson', { 'lessonid': lessonid })
            .map(data => {
                const lesson = data.json();
                if (Object.keys(lesson).length > 0) {
                    word.setLessonidAndTitle(lessonid, lesson.title);
                }
                return word;
            });
    }
    getWordsByID(lessonid: string) {
        let words: Words[] = [];
        return this.http.post('/proxy/word', { 'lessonid': lessonid })
            .map(data => {
                const l = data.json();
                if (Object.keys(l).length > 0) {
                    words = l;
                }
                return words;
            });
    }
    saveWord(word: Words) {
        return this.http.post('/proxy/word/save', word).map(data => {
            return data.text();
        });

    }
    updateWord(word: Words) {
        return  this.http.post('/proxy/word/update', word).map(data => {
            return data.text();
        });
    }
    deleteWord(id: string) {
        return  this.http.post('/proxy/word/delete', { 'id': id }).map(data => {
            return data.text();
        });
    }
}

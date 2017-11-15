import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


export class Navigation {
    lessonid: string;
    title: string;
}

@Injectable()
export class NaviService {



    constructor(private http: Http) {

    }

    getNavi() {
        return this.http.get('/proxy/navi').map((data) => {
            return data.json();
        });
    }

}

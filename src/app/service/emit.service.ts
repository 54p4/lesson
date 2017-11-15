import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EmitService {
    public eventEmit: any;
    constructor(private http: Http) {
        this.eventEmit = new EventEmitter();
    }

}

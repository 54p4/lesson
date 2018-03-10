import { Component, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';


@Component({
    selector: 'lesson-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})



export class HomeComponent {


    hometext: String = '';
    submit() {


    }
    check() {

        if (this.hometext.length > 51) {
            this.hometext = this.hometext.substring(0, 51);
        }
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {

    }
}

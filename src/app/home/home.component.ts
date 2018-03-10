import { Component, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'lesson-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})



export class HomeComponent {

    @ViewChild('awstext')
    awstext: ElementRef;

    txtwidth = {
        'width': '80%'
    };

    submit() {
        const txt = this.awstext.nativeElement.value;
        console.log(txt);
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        const scroll = window.innerWidth - document.body.scrollWidth;
        const width = document.body.scrollWidth * 0.8 - scroll - 3;
        this.txtwidth = {
            'width': width + 'px'
        };
    }
}

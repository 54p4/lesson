import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';


@Component({
    selector: 'lesson-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})



export class HomeComponent implements AfterViewInit {
    @ViewChild('myCanvas') myCanvas: ElementRef;
    @ViewChild('asuna') asunaimg: ElementRef;
    heightstyle = {};
    @ViewChild('awstext')
    awstext: ElementRef;
    context;
    ngAfterViewInit() {
        const canvas = this.myCanvas.nativeElement;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight - 200;
        const context = canvas.getContext('2d');
        this.context = context;
        this.heightstyle = {
            'height': window.innerHeight
        };
    }
    show(x, y) {
        const img = this.asunaimg.nativeElement;
        this.context.clearRect(0, 0, 300, 300);
        this.context.drawImage(img, x, y, 160, 180, 100, 100, 160, 180);
    }

    showWu() {
        this.show(1, 40);
    }
    showWarau() {
        this.show(164, 40);
    }
    submit() {
        const txt = this.awstext.nativeElement.value;
        console.log(txt);
        this.context.clearRect(300, 100, 300, 300);
        this.context.font = 'bold 30px arial';
        this.context.fillText(txt, 300, 200, 300);
        this.context.strokeText(txt, 300, 300, 300);

    }
}

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
    dialog() {
        this.context.beginPath();
        this.context.moveTo(300, 150);
        this.context.arcTo(670, 150, 670, 200, 45);
        this.context.lineWidth = 2;
        this.context.strokeStyle = 'snow';
        this.context.stroke();
        this.context.beginPath();
        this.context.moveTo(300, 240);
        this.context.arcTo(670, 240, 670, 200, 45);
        this.context.stroke();
    }
    submit() {
        const txt = this.awstext.nativeElement.value;
        console.log(txt);
        this.context.clearRect(290, 140, 400, 120);
        if (txt !== '') {
            this.dialog();
        }

        this.context.font = 'bold 20px arial';
        this.context.fillText(txt, 330, 200, 300);


    }
}

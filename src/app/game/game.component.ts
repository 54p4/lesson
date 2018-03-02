import { Component, OnInit, ElementRef, ViewChild, HostListener, OnDestroy } from '@angular/core';





@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  constructor() { }

  @ViewChild('gmCanvas') gmCanvas: ElementRef;
  @ViewChild('gametxt')
  gametxt: ElementRef;
  canvas: any;
  txtval: String = '';
  running: boolean;
  dx = 230;
  hanziList: Array<String> = ['中', '华', '人', '民', '共', '和', '国'];
  index = 0;

  ngOnInit() {
    this.running = true;
    this.canvas = this.gmCanvas.nativeElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 175;
    this.drawHanzi();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.canvas.height = window.innerHeight - 175;
  }
  ngOnDestroy() {
    this.running = false;
  }

  hanzi() {

  }
  drawHanzi() {
    if (!this.running || this.index >= this.hanziList.length) {
      return;
    }

    const context = this.canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    const x = this.dx + 3;
    context.font = '40px Arial';
    context.fillText(this.hanziList[this.index], x, 300, 50);
    this.dx = x;
    if (x >= window.innerWidth) {
      this.dx = 230;
      this.index = this.index + 1;
    }

    requestAnimationFrame(() => this.drawHanzi());
  }

  submit() {
    console.log(this.txtval + ':' + this.hanziList[this.index]);
    if (this.txtval === this.hanziList[this.index]) {
      console.log('success');
      this.index = this.index + 1;
      this.dx = 0;
    }
    this.txtval = '';
  }
}

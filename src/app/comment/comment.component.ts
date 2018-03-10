import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  floatStyle = { 'float': 'left' };

  @Input('floatx')
  set floatx(val) {
    if (val === 'right') {
      this.floatStyle = {
        'float': 'right'
      };
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

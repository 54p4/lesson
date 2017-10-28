import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'lesson-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, OnDestroy {

  lesson = ' ';
  sub: any;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    //this param must subscribe, perhaps, url changed but component did not change 
    this.sub = this.route.params.subscribe(params => {
      console.log(params['id']);
    });
  }

  ngOnDestroy(): void {
    //this unsubscribe is unnecessarily, ng will manage it
    this.sub.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lesson-txteditor',
  templateUrl: './txteditor.component.html',
  styleUrls: ['./txteditor.component.css']
})
export class TxtEditorComponent implements OnInit {

  title= 'わたし';
  content= '# hello';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }
  setvalue(){
    
  }
}

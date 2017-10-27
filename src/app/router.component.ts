import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';

import { TxtEditorComponent } from './editor/txt/txteditor.component';

import { WordComponet } from './word/word.component';

import { NaviComponent } from './navi/navi.component';

import { WdEditorComponent } from './editor/word/wdeditor.component';

const appRoutes: Routes = [
  {
    path: 'lesson',
    component: NaviComponent,
    children: [
      {
        path: ':id',
        component: BoardComponent
      }
    ]
  },
  {
    path: 'txteditor',
    component: TxtEditorComponent,
    children: [
      {
        path: ':id',
        component: TxtEditorComponent
      }
    ]
  },
  {
    path: 'word',
    component: WordComponet,
    children: [
      {
        path: ':id',
        component: WordComponet
      }
    ]
  },
  {
    path: 'wdeditor/:id',
    component: WdEditorComponent,
  },
  {
    path: '',
    component: WordComponet,
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class LessonRoutingModule { }

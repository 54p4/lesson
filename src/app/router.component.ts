import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { TxtEditorComponent } from './editor/txt/txteditor.component';
import { WordComponet } from './word/word.component';
import { NaviComponent } from './navi/navi.component';
import { WdEditorComponent } from './editor/word/wdeditor.component';
import { AdderComponent } from './editor/adder.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
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
    component: NaviComponent,
    children: [
      {
        path: ':id',
        component: TxtEditorComponent
      },
      {
        path: '',
        component: AdderComponent
      }
    ]
  },
  {
    path: 'word',
    component: NaviComponent,
    children: [
      {
        path: ':id',
        component: WordComponet
      }
    ]
  },
  {
    path: 'wdeditor',
    component: NaviComponent,
    children: [
      {
        path: ':id',
        component: WdEditorComponent,
      },
      {
        path: '',
        component: AdderComponent
      }
    ]
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

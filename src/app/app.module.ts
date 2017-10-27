import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';

import { LessonRoutingModule } from './router.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'angular2-markdown';
import { BoardComponent } from './board/board.component';
import { TxtEditorComponent } from './editor/txt/txteditor.component';
import { WdEditorComponent } from './editor/word/wdeditor.component';
import { WordComponet } from './word/word.component';
import { MheaderComponent } from './header/mheader.component';
import { WdEditorBarComponent } from './editor/word/wdeditorbar.component';

@NgModule({
  declarations: [
    AppComponent, NaviComponent, BoardComponent, TxtEditorComponent,
    WordComponet, MheaderComponent, WdEditorComponent, WdEditorBarComponent
  ],
  imports: [
    BrowserModule, LessonRoutingModule, MarkdownModule.forRoot(), FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, MheaderComponent]
})
export class AppModule { }

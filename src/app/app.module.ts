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
import { NavibarComponent } from './navi/navibar.component';
import { AdderComponent } from './editor/adder.component';
import { LessonService } from './service/lesson.service';
import { WordService } from './service/word.service';
import { ObjectPipe } from './pipes/object.pipe';
@NgModule({
  declarations: [
    AppComponent, NaviComponent, BoardComponent, TxtEditorComponent,
    WordComponet, MheaderComponent, WdEditorComponent, WdEditorBarComponent, NavibarComponent
    , AdderComponent, ObjectPipe
  ],
  imports: [
    BrowserModule, LessonRoutingModule, MarkdownModule.forRoot(), FormsModule, ReactiveFormsModule
  ],
  providers: [LessonService, WordService],
  bootstrap: [AppComponent, MheaderComponent]
})
export class AppModule { }

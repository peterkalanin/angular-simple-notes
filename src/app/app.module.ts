import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewNoteComponent } from './dashboard/new-note/new-note.component';
import { NoteComponent } from './dashboard/note/note.component';
import { NoteBoardComponent } from './dashboard/note-board/note-board.component';
import { NoteModalComponent } from './dashboard/note-modal/note-modal.component';
import { PalettePickerComponent } from './dashboard/palette-picker/palette-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewNoteComponent,
    NoteComponent,
    NoteBoardComponent,
    NoteModalComponent,
    PalettePickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

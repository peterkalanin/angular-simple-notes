import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { INote, Note } from '../models/note.model';
import { NoteService } from '../services/note.service';
import { NoteModalComponent } from './note-modal/note-modal.component';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('noteModal') noteModal!: NoteModalComponent;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void { }

  onModalOpen(note: INote) {
    if (!this.noteModal) {
      return;
    }

    this.noteModal.note = new Note(note);
    this.noteModal.onOpen();
  }

  onModalClose(model: Note) {
    const note = new Note(model).toSubmitModel();
    this.noteService.update(note);
  }

}

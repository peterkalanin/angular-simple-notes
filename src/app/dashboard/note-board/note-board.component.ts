import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'grid gap-8', 'style': 'grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));' }
})
export class NoteBoardComponent implements OnInit {
  notes: Note[] = []

  @Output() noteEdit: EventEmitter<Note> = new EventEmitter<Note>();

  constructor(private noteService: NoteService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.noteService.model$.subscribe(notes => {
      this.notes = notes;
      this.cd.markForCheck();
    });
    this.noteService.getAll();
  }

  onNoteEdit(note: Note) {
    this.noteEdit.emit(note);
  }

}

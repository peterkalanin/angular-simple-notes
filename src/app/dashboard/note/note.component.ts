import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {
  @Input() note!: Note;

  @Output() noteEdit: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {
  }

  onNoteEdit() {
    this.noteEdit.emit(new Note(this.note));
  }
}

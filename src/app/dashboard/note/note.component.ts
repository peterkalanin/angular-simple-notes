import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
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

  @ViewChild('controlPanel') controlPanel!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onNoteEdit() {
    this.noteEdit.emit(new Note(this.note));
  }

  onCardClick(event: any) {
    if (this.controlPanel.nativeElement.contains(event.target)) {
      return;
    }
    this.onNoteEdit();
  }
}

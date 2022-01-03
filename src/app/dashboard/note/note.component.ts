import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { PalettePickerComponent } from '../palette-picker/palette-picker.component';

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

  constructor(private noteService: NoteService) { }

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

  onDelete() {
    if (!this.note.id) {
      return;
    }
    this.noteService.delete(this.note.id);
  }

  onColorSelect(color: string) {
    this.note.color = color;
    this.noteService.update(this.note);
  }
}

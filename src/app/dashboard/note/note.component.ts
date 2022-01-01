import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent implements OnInit {
  @Input() note!: Note;

  constructor() { }

  ngOnInit(): void {
  }

}

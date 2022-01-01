import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'grid ' }
})
export class NoteBoardComponent implements OnInit {
  note: Note = new Note({
    content: 'Moja prvá poznámka',
  });

  constructor() { }

  ngOnInit(): void {
  }

}

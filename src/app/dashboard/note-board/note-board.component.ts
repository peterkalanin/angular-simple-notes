import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note-board',
  templateUrl: './note-board.component.html',
  styleUrls: ['./note-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'class': 'grid gap-8', 'style': 'grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));' }
})
export class NoteBoardComponent implements OnInit {
  notes: Note[] = [
    new Note({
      content: 'Moja prvá poznámka',
    }),
    new Note({
      content: 'Test poznámka',
    }),
    new Note({
      content: 'Bla bla',
    }),
    new Note({
      content: `Toto je strašne dlhá poznámka.
      Aj cez dva riadky`,
    }),
    new Note({
      content: 'Bla bla',
    }),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

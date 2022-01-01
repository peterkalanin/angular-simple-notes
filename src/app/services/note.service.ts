import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private _model: Note[] = [];
  public get model(): Note[] {
    return this._model;
  }
  public set model(value: Note[]) {
    this._model = value;
    this.model$.next(this._model);
  }

  model$: Subject<Note[]> = new Subject<Note[]>();

  constructor(private http: HttpClient,) { }

  getAll() {
    const path = "api/notes";

    const req$ = this.http
      .get<Note[]>(path)
      .pipe(
        share()
      );

    req$.subscribe((resp) => {
      this.model = resp;
    });

    return req$;
  }

  crete(note: Note) {
    const path = "api/notes";

    const req$ = this.http
      .put<Note[]>(path, note)
      .pipe(
        share()
      );

    req$.subscribe((resp) => {
      this.model = resp;
    })

    return req$;
  }
}

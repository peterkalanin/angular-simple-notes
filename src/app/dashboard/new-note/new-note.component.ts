import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
  host: { 'class': 'flex justify-center mb-20' }
})
export class NewNoteComponent implements OnInit {
  form!: FormGroup;
  isActive: boolean = false;
  note?: Note;

  @ViewChild('backdrop') backdrop!: ElementRef;
  @ViewChild('textarea') textarea!: ElementRef;

  constructor(private fb: FormBuilder, private noteService: NoteService) { }

  ngOnInit(): void {
    this.note = new Note({});

    this.form = this.fb.group({
      title: [this.note.title],
      contentString: [this.note.contentString, Validators.compose([Validators.required, Validators.minLength(1)])],
      color: [this.note.color]
    });
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: { target: any; }): void {
    if (this.isActive && this.backdrop.nativeElement.contains(event.target) && !this.textarea.nativeElement.contains(event.target)) {
      this.onLeave();
    }
    if (this.textarea.nativeElement.contains(event.target)) {
      this.isActive = true;
    }
  }

  onLeave() {
    this.createNewNote();
    this.note = new Note({});
    this.resetState();
  }

  createNewNote() {
    if (this.form.valid) {
      const note = new Note(this.form.value).toSubmitModel();
      this.noteService.crete(note);
      this.resetState();
    }
  }

  clearForm() {
    this.form.reset();
  }

  onColorSelect(color: string) {
    if (!this.note) { return; }
    const colorFc = this.form.get('color');
    if (!colorFc) { return; }
    colorFc.setValue(color);
    this.note.color = color;
  }

  onTextareaChange(event?: Event) {
    this.textarea.nativeElement.style.height = this.textarea.nativeElement.scrollHeight + 'px';
  }

  resetState() {
    this.isActive = false;
    this.onTextareaChange();
    this.clearForm();
    this.textarea.nativeElement.style.height = 'auto';
  }

}

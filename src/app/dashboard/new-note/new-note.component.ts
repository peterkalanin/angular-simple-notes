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
  isActive: boolean = false

  @ViewChild('backdrop') backdrop!: ElementRef;
  @ViewChild('textarea') textarea!: ElementRef;

  constructor(private fb: FormBuilder, private noteService: NoteService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      title: [],
      content: ['', Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: { target: any; }): void {
    if (this.isActive && this.backdrop.nativeElement.contains(event.target) && !this.textarea.nativeElement.contains(event.target)) {
      this.isActive = false;
      this.onLeave();
    }
    if (this.textarea.nativeElement.contains(event.target)) {
      this.isActive = true;
    }
  }

  onLeave() {
    this.createNewNote();
  }

  createNewNote() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const note: Note = { ...formValue, content: formValue.content.split('\n') };
      this.noteService.crete(note);
      this.clearForm();
    }
  }

  clearForm() {
    this.form.reset();
  }

}

import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INote, Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss']
})
export class NoteModalComponent implements OnInit {
  form!: FormGroup;
  show: boolean = false;
  note?: Note;

  @Output() close: EventEmitter<Note> = new EventEmitter<Note>();

  @ViewChild('modalCard') modalCard!: ElementRef;
  @ViewChild('textarea') textarea!: ElementRef;

  constructor(private fb: FormBuilder, private noteService: NoteService) { }

  ngOnInit(): void {

  }

  initForm() {
    if (!this.note) { return }

    this.form = this.fb.group({
      id: [this.note.id],
      title: [this.note.title],
      contentString: [this.note.contentString, Validators.compose([Validators.required, Validators.minLength(1)])]
    });
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: { target: any; }): void {
    if (this.show && this.modalCard && !this.modalCard.nativeElement.contains(event.target)) {
      this.onClose();
    }
  }

  onTextareaChange(event: any) {
    console.log();
  }

  onOpen() {
    this.show = true;
    this.initForm();
  }

  onClose() {
    this.show = false;
    this.close.emit(this.form.value);
  }
}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INote, Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-modal',
  templateUrl: './note-modal.component.html',
  styleUrls: ['./note-modal.component.scss']
})
export class NoteModalComponent implements OnInit, AfterViewChecked {
  form!: FormGroup;
  show: boolean = false;
  note?: Note;
  firstCheckAfterOpen = false;

  @Output() close: EventEmitter<Note> = new EventEmitter<Note>();

  @ViewChild('modalCard') modalCard!: ElementRef;
  @ViewChild('textarea') textarea!: ElementRef;

  constructor(private fb: FormBuilder, private noteService: NoteService) { }

  ngOnInit(): void {

  }

  ngAfterViewChecked(): void {
    if (this.firstCheckAfterOpen) {
      this.onTextareaChange();
      this.firstCheckAfterOpen = false;
    }
  }

  initForm() {
    if (!this.note) { return }

    this.form = this.fb.group({
      id: [this.note.id],
      title: [this.note.title],
      contentString: [this.note.contentString, Validators.compose([Validators.required, Validators.minLength(1)])],
      color: [this.note.color]
    });
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: { target: any; }): void {
    if (this.show && this.modalCard && !this.modalCard.nativeElement.contains(event.target)) {
      this.onClose();
    }
  }

  onTextareaChange(event?: Event) {
    if (this.textarea) {
      this.textarea.nativeElement.style.height = this.textarea.nativeElement.scrollHeight + 'px';
    }
  }

  onOpen() {
    this.show = true;
    this.initForm();
    this.firstCheckAfterOpen = true
    this.onTextareaChange();
  }

  onClose() {
    this.show = false;
    this.close.emit(this.form.value);
  }

  onDelete() {
    if (!this.note) { return; }
    if (!this.note.id) { return; }

    this.noteService.delete(this.note.id);
    this.show = false;
  }

  onColorSelect(color: string) {
    if (!this.note) { return; }
    const colorFc = this.form.get('color');
    if (!colorFc) { return; }
    colorFc.setValue(color);
    this.note.color = color;
  }
}

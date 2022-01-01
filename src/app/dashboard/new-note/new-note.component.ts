import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      title: [],
      content: []
    });
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: { target: any; }): void {
    if (this.isActive && this.backdrop.nativeElement.contains(event.target) && !this.textarea.nativeElement.contains(event.target)) {
      this.isActive = false;
    }
    if (this.textarea.nativeElement.contains(event.target)) {
      this.isActive = true;
    }
  }

}

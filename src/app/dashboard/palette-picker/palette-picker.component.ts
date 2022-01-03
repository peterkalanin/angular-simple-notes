import { Component, OnInit, ChangeDetectionStrategy, HostBinding, ChangeDetectorRef, HostListener, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-palette-picker',
  templateUrl: './palette-picker.component.html',
  styleUrls: ['./palette-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PalettePickerComponent implements OnInit {
  private _show: boolean = false;
  public get show(): boolean {
    return this._show;
  }
  public set show(value: boolean) {
    this._show = value;
    this.cd.markForCheck();
  }

  colors: string[] = ['bg-white', 'bg-yellow-200', 'bg-orange-300', 'bg-red-300', 'bg-blue-300', 'bg-indigo-200', 'bg-teal-200', 'bg-gray-300',];

  @Output() colorSelect: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('palettePanel') palettePanel!: ElementRef;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: { target: any; }): void {
    if (!this.palettePanel.nativeElement.contains(event.target)) {
      this.show = false;
    }
  }

  onPalettePanelClick(event: any) {
    event.stopPropagation();
  }

  onColorSelect(color: string) {
    this.colorSelect.emit(color);
  }
}

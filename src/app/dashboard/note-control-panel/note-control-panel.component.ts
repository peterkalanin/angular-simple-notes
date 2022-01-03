import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PalettePickerComponent } from '../palette-picker/palette-picker.component';

@Component({
  selector: 'app-note-control-panel',
  templateUrl: './note-control-panel.component.html',
  styleUrls: ['./note-control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteControlPanelComponent implements OnInit {
  private _hasGroup: boolean = false;
  @Input()
  public get hasGroup(): boolean {
    return this._hasGroup;
  }
  public set hasGroup(value: any) {
    this._hasGroup = value !== undefined;
  }

  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  @Output() colorSelect: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('palettePicker') palettePicker!: PalettePickerComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit();
  }

  onPaletePickerClick() {
    this.palettePicker.show = true;
  }

  onColorSelect(color: string) {
    this.colorSelect.emit(color);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteControlPanelComponent } from './note-control-panel.component';

describe('NoteControlPanelComponent', () => {
  let component: NoteControlPanelComponent;
  let fixture: ComponentFixture<NoteControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteControlPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

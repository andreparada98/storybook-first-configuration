import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdTableComponent } from './rd-table.component';

describe('RdTableComponent', () => {
  let component: RdTableComponent;
  let fixture: ComponentFixture<RdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdButtonComponent } from './rd-button.component';

describe('RdButtonComponent', () => {
  let component: RdButtonComponent;
  let fixture: ComponentFixture<RdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

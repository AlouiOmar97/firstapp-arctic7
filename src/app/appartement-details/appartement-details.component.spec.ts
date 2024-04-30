import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementDetailsComponent } from './appartement-details.component';

describe('AppartementDetailsComponent', () => {
  let component: AppartementDetailsComponent;
  let fixture: ComponentFixture<AppartementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

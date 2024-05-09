import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppartementCardComponent } from './appartement-card.component';

describe('AppartementCardComponent', () => {
  let component: AppartementCardComponent;
  let fixture: ComponentFixture<AppartementCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppartementCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppartementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

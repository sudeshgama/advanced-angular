import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LAdAnComponent } from './l-ad-an.component';

describe('LAdAnComponent', () => {
  let component: LAdAnComponent;
  let fixture: ComponentFixture<LAdAnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LAdAnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LAdAnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

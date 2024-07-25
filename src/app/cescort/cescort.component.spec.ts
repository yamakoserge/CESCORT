import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CescortComponent } from './cescort.component';

describe('CescortComponent', () => {
  let component: CescortComponent;
  let fixture: ComponentFixture<CescortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CescortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CescortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

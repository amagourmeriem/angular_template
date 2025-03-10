import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationComponent } from './medications.component';

describe('MedicationsComponent', () => {
  let component: MedicationComponent;
  let fixture: ComponentFixture<MedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

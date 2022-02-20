import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComplaintFormComponent } from './add-complaint-form.component';

describe('AddComplaintFormComponent', () => {
  let component: AddComplaintFormComponent;
  let fixture: ComponentFixture<AddComplaintFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComplaintFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComplaintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

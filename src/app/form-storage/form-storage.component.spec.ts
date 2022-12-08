import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStorageComponent } from './form-storage.component';

describe('FormStorageComponent', () => {
  let component: FormStorageComponent;
  let fixture: ComponentFixture<FormStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

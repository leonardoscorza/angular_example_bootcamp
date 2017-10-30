import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailComponent } from './form-details.component';

describe('FormDetailsComponent', () => {
  let component: FormDetailComponent;
  let fixture: ComponentFixture<FormDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

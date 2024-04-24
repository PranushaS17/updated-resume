import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherResumeComponent } from './another-resume.component';

describe('AnotherResumeComponent', () => {
  let component: AnotherResumeComponent;
  let fixture: ComponentFixture<AnotherResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherResumeComponent]
    });
    fixture = TestBed.createComponent(AnotherResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

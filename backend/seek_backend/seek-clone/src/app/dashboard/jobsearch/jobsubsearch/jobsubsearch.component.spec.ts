import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsubsearchComponent } from './jobsubsearch.component';

describe('JobsubsearchComponent', () => {
  let component: JobsubsearchComponent;
  let fixture: ComponentFixture<JobsubsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsubsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsubsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

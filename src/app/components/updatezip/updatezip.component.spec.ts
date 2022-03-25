import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatezipComponent } from './updatezip.component';

describe('UpdatezipComponent', () => {
  let component: UpdatezipComponent;
  let fixture: ComponentFixture<UpdatezipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatezipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatezipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

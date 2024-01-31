import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectsComponent } from './selects.component';

describe('SelectsComponent', () => {
  let component: SelectsComponent;
  let fixture: ComponentFixture<SelectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectsComponent]
    });
    fixture = TestBed.createComponent(SelectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

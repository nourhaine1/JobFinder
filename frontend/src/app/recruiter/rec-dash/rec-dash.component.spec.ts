import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecDashComponent } from './rec-dash.component';

describe('RecDashComponent', () => {
  let component: RecDashComponent;
  let fixture: ComponentFixture<RecDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecDashComponent]
    });
    fixture = TestBed.createComponent(RecDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

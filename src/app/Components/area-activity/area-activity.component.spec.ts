import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaActivityComponent } from './area-activity.component';

describe('AreaActivityComponent', () => {
  let component: AreaActivityComponent;
  let fixture: ComponentFixture<AreaActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreaActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

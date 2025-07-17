import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundExperienceComponent } from './background-experience.component';

describe('BackgroundExperienceComponent', () => {
  let component: BackgroundExperienceComponent;
  let fixture: ComponentFixture<BackgroundExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroundExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

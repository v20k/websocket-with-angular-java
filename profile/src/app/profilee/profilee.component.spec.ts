import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileeComponent } from './profilee.component';

describe('ProfileeComponent', () => {
  let component: ProfileeComponent;
  let fixture: ComponentFixture<ProfileeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileeComponent]
    });
    fixture = TestBed.createComponent(ProfileeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

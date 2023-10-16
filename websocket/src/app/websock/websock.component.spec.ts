import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsockComponent } from './websock.component';

describe('WebsockComponent', () => {
  let component: WebsockComponent;
  let fixture: ComponentFixture<WebsockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsockComponent]
    });
    fixture = TestBed.createComponent(WebsockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

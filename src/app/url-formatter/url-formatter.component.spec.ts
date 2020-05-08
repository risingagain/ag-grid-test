import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlFormatterComponent } from './url-formatter.component';

describe('UrlFormatterComponent', () => {
  let component: UrlFormatterComponent;
  let fixture: ComponentFixture<UrlFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFormatterComponent } from './image-formatter.component';

describe('ImageFormatterComponent', () => {
  let component: ImageFormatterComponent;
  let fixture: ComponentFixture<ImageFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLayoutComponentComponent } from './basic-layout-component.component';

describe('BasicLayoutComponentComponent', () => {
  let component: BasicLayoutComponentComponent;
  let fixture: ComponentFixture<BasicLayoutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicLayoutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

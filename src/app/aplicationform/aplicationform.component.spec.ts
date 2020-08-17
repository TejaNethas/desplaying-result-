import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationformComponent } from './aplicationform.component';

describe('AplicationformComponent', () => {
  let component: AplicationformComponent;
  let fixture: ComponentFixture<AplicationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitionFormComponent} from './admitionform.component';

describe('AdmitionformComponent', () => {
  let component: AdmitionFormComponent;
  let fixture: ComponentFixture<AdmitionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmitionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

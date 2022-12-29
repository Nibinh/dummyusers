import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummymanagerComponent } from './dummymanager.component';

describe('DummymanagerComponent', () => {
  let component: DummymanagerComponent;
  let fixture: ComponentFixture<DummymanagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummymanagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummymanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

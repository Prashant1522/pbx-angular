import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionerComponent } from './provisioner.component';

describe('ProvisionerComponent', () => {
  let component: ProvisionerComponent;
  let fixture: ComponentFixture<ProvisionerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

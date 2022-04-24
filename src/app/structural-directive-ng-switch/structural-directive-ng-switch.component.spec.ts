import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgSwitchComponent } from './structural-directive-ng-switch.component';

describe('StructuralDirectiveNgSwitchComponent', () => {
  let component: StructuralDirectiveNgSwitchComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveNgSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

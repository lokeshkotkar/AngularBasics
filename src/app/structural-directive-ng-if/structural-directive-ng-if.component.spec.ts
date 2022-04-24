import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgIfComponent } from './structural-directive-ng-if.component';

describe('StructuralDirectiveNgIfComponent', () => {
  let component: StructuralDirectiveNgIfComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveNgIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

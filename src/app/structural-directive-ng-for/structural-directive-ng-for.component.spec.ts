import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgForComponent } from './structural-directive-ng-for.component';

describe('StructuralDirectiveNgForComponent', () => {
  let component: StructuralDirectiveNgForComponent;
  let fixture: ComponentFixture<StructuralDirectiveNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPatenteComponent } from './editar-patente.component';

describe('EditarPatenteComponent', () => {
  let component: EditarPatenteComponent;
  let fixture: ComponentFixture<EditarPatenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPatenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPatenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHistoriasComponent } from './lista.component';

describe('ListaComponent', () => {
  let component: ListaHistoriasComponent;
  let fixture: ComponentFixture<ListaHistoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaHistoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

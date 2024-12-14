import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGruposComponent } from './lista.component';

describe('ListaComponent', () => {
  let component: ListaGruposComponent;
  let fixture: ComponentFixture<ListaGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaGruposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

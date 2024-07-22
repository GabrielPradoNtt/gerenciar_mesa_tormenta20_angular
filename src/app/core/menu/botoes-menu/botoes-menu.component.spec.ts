import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesMenuComponent } from './botoes-menu.component';

describe('BotoesMenuComponent', () => {
  let component: BotoesMenuComponent;
  let fixture: ComponentFixture<BotoesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotoesMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

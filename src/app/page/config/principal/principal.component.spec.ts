import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPrincipalComponent } from './principal.component';

describe('PrincipalComponent', () => {
  let component: ConfigPrincipalComponent;
  let fixture: ComponentFixture<ConfigPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

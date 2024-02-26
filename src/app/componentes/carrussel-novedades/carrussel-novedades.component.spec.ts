import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrusselNovedadesComponent } from './carrussel-novedades.component';

describe('CarrusselNovedadesComponent', () => {
  let component: CarrusselNovedadesComponent;
  let fixture: ComponentFixture<CarrusselNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrusselNovedadesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrusselNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioTQCComponent } from './repositorio-tqc.component';

describe('RepositorioTQCComponent', () => {
  let component: RepositorioTQCComponent;
  let fixture: ComponentFixture<RepositorioTQCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositorioTQCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepositorioTQCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

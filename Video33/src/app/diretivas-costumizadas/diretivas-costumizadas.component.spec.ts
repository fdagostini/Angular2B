import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCostumizadasComponent } from './diretivas-costumizadas.component';

describe('DiretivasCostumizadasComponent', () => {
  let component: DiretivasCostumizadasComponent;
  let fixture: ComponentFixture<DiretivasCostumizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasCostumizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCostumizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

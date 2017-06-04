import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAutomaticoComponent } from './componente-automatico.component';

describe('ComponenteAutomaticoComponent', () => {
  let component: ComponenteAutomaticoComponent;
  let fixture: ComponentFixture<ComponenteAutomaticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteAutomaticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAutomaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiclovidaComponent } from './ciclovida.component';

describe('CiclovidaComponent', () => {
  let component: CiclovidaComponent;
  let fixture: ComponentFixture<CiclovidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiclovidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiclovidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

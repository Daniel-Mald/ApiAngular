import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeElementComponent } from './see-element.component';

describe('SeeElementComponent', () => {
  let component: SeeElementComponent;
  let fixture: ComponentFixture<SeeElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

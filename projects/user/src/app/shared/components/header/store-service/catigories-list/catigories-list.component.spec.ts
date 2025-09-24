import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatigoriesListComponent } from './catigories-list.component';

describe('CatigoriesListComponent', () => {
  let component: CatigoriesListComponent;
  let fixture: ComponentFixture<CatigoriesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatigoriesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatigoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

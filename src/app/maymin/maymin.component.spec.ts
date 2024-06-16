import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayminComponent } from './maymin.component';

describe('MayminComponent', () => {
  let component: MayminComponent;
  let fixture: ComponentFixture<MayminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MayminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MayminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

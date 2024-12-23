import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltermoviesComponent } from './filtermovies.component';

describe('FiltermoviesComponent', () => {
  let component: FiltermoviesComponent;
  let fixture: ComponentFixture<FiltermoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltermoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltermoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsTableComponent } from './actors-table.component';

describe('ActorsTableComponent', () => {
  let component: ActorsTableComponent;
  let fixture: ComponentFixture<ActorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

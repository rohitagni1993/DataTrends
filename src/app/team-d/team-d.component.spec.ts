import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDComponent } from './team-d.component';

describe('TeamDComponent', () => {
  let component: TeamDComponent;
  let fixture: ComponentFixture<TeamDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

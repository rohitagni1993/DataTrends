import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCComponent } from './team-c.component';

describe('TeamCComponent', () => {
  let component: TeamCComponent;
  let fixture: ComponentFixture<TeamCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

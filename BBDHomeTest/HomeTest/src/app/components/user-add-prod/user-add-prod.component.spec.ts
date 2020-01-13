import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddProdComponent } from './user-add-prod.component';

describe('UserAddProdComponent', () => {
  let component: UserAddProdComponent;
  let fixture: ComponentFixture<UserAddProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

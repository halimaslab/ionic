import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatkulPage } from './matkul.page';

describe('MatkulPage', () => {
  let component: MatkulPage;
  let fixture: ComponentFixture<MatkulPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MatkulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DosenPage } from './dosen.page';

describe('DosenPage', () => {
  let component: DosenPage;
  let fixture: ComponentFixture<DosenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

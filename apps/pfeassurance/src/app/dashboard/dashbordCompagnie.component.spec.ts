import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashbordCompagnieComponent } from './dashbordCompagnie.component';

describe('DashbordCompagnieComponent', () => {
  let component: DashbordCompagnieComponent;
  let fixture: ComponentFixture<DashbordCompagnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordCompagnieComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashbordCompagnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

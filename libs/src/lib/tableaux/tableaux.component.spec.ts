import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableauxComponent } from './tableaux.component';

describe('TableauxComponent', () => {
  let component: TableauxComponent;
  let fixture: ComponentFixture<TableauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

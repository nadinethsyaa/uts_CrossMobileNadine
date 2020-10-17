import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditRamPage } from './edit-ram.page';

describe('EditRamPage', () => {
  let component: EditRamPage;
  let fixture: ComponentFixture<EditRamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditRamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

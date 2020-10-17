import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditMboardPage } from './edit-mboard.page';

describe('EditMboardPage', () => {
  let component: EditMboardPage;
  let fixture: ComponentFixture<EditMboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditMboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

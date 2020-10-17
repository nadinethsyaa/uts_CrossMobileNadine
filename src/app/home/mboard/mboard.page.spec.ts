import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MboardPage } from './mboard.page';

describe('MboardPage', () => {
  let component: MboardPage;
  let fixture: ComponentFixture<MboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

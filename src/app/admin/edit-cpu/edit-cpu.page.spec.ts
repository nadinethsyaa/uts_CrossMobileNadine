import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCpuPage } from './edit-cpu.page';

describe('EditCpuPage', () => {
  let component: EditCpuPage;
  let fixture: ComponentFixture<EditCpuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCpuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCpuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

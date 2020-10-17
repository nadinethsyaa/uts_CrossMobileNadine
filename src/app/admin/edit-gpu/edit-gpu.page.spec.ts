import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditGpuPage } from './edit-gpu.page';

describe('EditGpuPage', () => {
  let component: EditGpuPage;
  let fixture: ComponentFixture<EditGpuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGpuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditGpuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KakaoNaviComponent } from './kakao-navi.component';

describe('KakaoNaviComponent', () => {
  let component: KakaoNaviComponent;
  let fixture: ComponentFixture<KakaoNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakaoNaviComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KakaoNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

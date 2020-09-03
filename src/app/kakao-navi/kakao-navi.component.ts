import { Component, OnInit } from '@angular/core';


declare let Kakao:any;

@Component({
  selector: 'app-kakao-navi',
  templateUrl: './kakao-navi.component.html',
  styleUrls: ['./kakao-navi.component.scss'],
})
export class KakaoNaviComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {}

  navi() {
    Kakao.navi.start({
      name: '현대백화점 판교점',
      x: 127.11205203011632,
      y: 37.39279717586919,
      coordType: 'wgs84',
    })
    console.log('hihi')
  }
}

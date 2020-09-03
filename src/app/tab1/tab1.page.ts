import { Component, OnInit } from '@angular/core';

declare var kakao;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  map : any;
  infowindow: any;

  // 마커들
  places = [
    { name: '차 현재 위치', lat: 37.487105, lon: 126.825256 }
  ];

  constructor() { }

  ngOnInit() {
    // 살짝 딜레이 줘야 화면에 맵에 쪽바로 그려진다.
    setTimeout(() => {
      const options = {
        center: new kakao.maps.LatLng(37.487105, 126.825256),
        level: 3
      };

      this.map = new kakao.maps.Map(document.getElementById('map'), options);

      this.infowindow = new kakao.maps.InfoWindow({
        map: this.map,
        zIndex: 4,
        position: new kakao.maps.LatLng(37.487105, 126.825256),
        removable: true
      });

      this.addPlaces();
    }, 300);
  }

  addPlaces() {
    this.places.forEach(place => {
      const image = new kakao.maps.MarkerImage(
        'assets/img/marker.png',
        new kakao.maps.Size(64, 69),
        { offset: new kakao.maps.Point(27, 69) }
      );

      const marker = new kakao.maps.Marker({
        clickable: true,
        position: new kakao.maps.LatLng(place.lat, place.lon),
        image
      });

      marker.setMap(this.map);

      // 클릭했을때 마커위에 인포윈도우 그리기
      kakao.maps.event.addListener(marker, 'click', () => {
        this.infowindow.setContent(`<div style="padding:5px;width:250px;">${place.name}</div>`);
        this.infowindow.open(this.map, marker);
      });

      this.infowindow.setContent(`<div style="padding:5px;width:250px;">${place.name}</div>`);
      this.infowindow.open(this.map, marker);
    });
  }

}

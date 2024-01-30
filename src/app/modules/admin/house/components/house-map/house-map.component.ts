import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as M from 'mapbox-gl';
import {environment} from '../../../../../../environments/environment';

@Component({
  selector: 'app-house-map',
  standalone: true,
  imports: [
    // mapbox api
    CommonModule
  ],
  templateUrl: './house-map.component.html',
  styleUrls: ['./house-map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HouseMapComponent implements OnInit {

  @Input() latitude: number;
  @Input() longitude: number;
  map: M.Map;
  marker: M.Marker;

  constructor() {
  }

  ngOnInit(): void {
    this.loadMap();
    this.addMarker();
  }

  loadMap() {
    this.map = new M.Map({
      accessToken: environment.mapbox,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      zoom: 5,
      center: [this.longitude, this.latitude]
    });
  }

  addMarker() {
    this.marker = new M.Marker()
      .setLngLat([this.longitude, this.latitude])
      .addTo(this.map);
  }
}

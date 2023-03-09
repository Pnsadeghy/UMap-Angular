import {latLng, tileLayer} from "leaflet";

export const mapOptions = (lat: number, lng: number) => ({
  layers: [
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
  ],
  zoom: 5,
  center: latLng(lat, lng)
});

import React from 'react';
import { TileLayer } from 'react-leaflet';

const customTileLayer = () => (
  <TileLayer
  attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  url='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
  />
)

export default customTileLayer;
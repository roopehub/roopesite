import React from 'react';
import { TileLayer } from 'react-leaflet';

const customTileLayer = () => (
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions/">CARTO</a>'
    url={`https://basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png?key=${import.meta.env.VITE_CARTO_API_KEY || ''}`}
    maxZoom={20}
  />
);

export default customTileLayer;

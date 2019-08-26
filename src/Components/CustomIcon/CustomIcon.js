import L from 'leaflet';

export const CustomIcon = new L.Icon({
    iconUrl: require('../../Assets/Images/icon2.png'),
    iconRetinaUrl: require('../../Assets/Images/icon2.png'),
    iconSize: [35, 46],
    iconAnchor: [25, 46],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 50)
});
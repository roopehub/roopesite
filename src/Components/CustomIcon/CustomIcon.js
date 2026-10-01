import L from 'leaflet';
import iconImage from '../../Assets/Images/icon2.png';

export const CustomIcon = new L.Icon({
    iconUrl: iconImage,
    iconRetinaUrl: iconImage,
    iconSize: [35, 46],
    iconAnchor: [25, 46],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 50)
});

import React from 'react';
import { Marker } from 'react-leaflet';
import CustomPopup from '../CustomPopUp/CustomPopup';
import { CustomIcon } from '../CustomIcon/CustomIcon';
import classes from './CustomMarker.module.css';

const customMarker = props => (
    <Marker
        position={props.location}
        icon={CustomIcon}
        className={classes.CustomMarker}
        title={props.item.name}
        ref={marker => props.onMarkerRef(
            props.item.name,
            marker ? marker.leafletElement : null
        )}
    >
        <CustomPopup item={props.item} markerRefs={props.markerRefs} />
    </Marker>
);

export default customMarker;

import React from 'react';
import { Marker } from 'react-leaflet';
import CustomPopup from '../CustomPopUp/CustomPopup';
import { CustomIcon } from '../CustomIcon/CustomIcon';
import classes from './CustomMarker.module.css';

const customMarker = (props) => (
    <Marker position={props.location} icon={CustomIcon} className={classes.CustomMarker}>
        <CustomPopup item={props.item}/>
    </Marker>
)

export default customMarker;

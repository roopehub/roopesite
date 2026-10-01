import React from 'react';
import { Marker } from 'react-leaflet';
import CustomPopup from '../CustomPopUp/CustomPopup';
import { CustomIcon } from '../CustomIcon/CustomIcon';
import classes from './CustomMarker.module.css';

const customMarker = (props) =>  {
    const initMarker = ref => {
        if (ref) {
          ref.leafletElement.openPopup()
        }
      }

      return (
        <Marker position={props.location} icon={CustomIcon} className={classes.CustomMarker} ref={initMarker}>
            <CustomPopup item={props.item}/>
        </Marker>
      )
}

export default customMarker;

import React, { Component } from 'react';
import { Map } from 'react-leaflet';
import classes from './CustomMap.module.css';
import Header from '../Header/Header';
import CustomTileLayer from '../CustomTileLayer/CustomTileLayer';
import CustomMarkers from '../CustomMarkers/CustomMarkers';

class CustomMap extends Component {
    markerRefs = {};

    registerMarker = (name, marker) => {
        if (marker) {
            this.markerRefs[name] = marker;
        } else {
            delete this.markerRefs[name];
        }
    }

    state = {
        startPos: [60.188, 24.932],
        startZoom: 12
    }
    render() {
        return (
            <React.Fragment>
                <Map 
                    center={this.state.startPos}
                    zoom={this.state.startZoom}
                    className={classes.Mapp}>
                    <Header markerRefs={this.markerRefs} />
                    <CustomTileLayer/>
                    <CustomMarkers
                        markerRefs={this.markerRefs}
                        onMarkerRef={this.registerMarker}
                    />
                </Map>
            </React.Fragment>
        );
    }
}

export default CustomMap;
import React, { Component } from 'react';
import { Map } from 'react-leaflet';
import classes from './CustomMap.module.css';
import Header from '../Header/Header';
import CustomTileLayer from '../CustomTileLayer/CustomTileLayer';
import CustomMarkers from '../CustomMarkers/CustomMarkers';

class CustomMap extends Component {
    state = {
        startPos: [60.227617, 25.012640],
        startZoom: 14
    }
    render() {
        return (
            <React.Fragment>
                <Map 
                    center={this.state.startPos}
                    zoom={this.state.startZoom}
                    className={classes.Mapp}>
                    <Header/>
                    <CustomTileLayer/>
                    <CustomMarkers />
                </Map>
            </React.Fragment>
        );
    }
}

export default CustomMap;
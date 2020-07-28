import React, { Component } from 'react';
import { Map } from 'react-leaflet';
import classes from './CustomMap.module.css';
import Header from '../Header/Header';
import CustomTileLayer from '../CustomTileLayer/CustomTileLayer';
import CustomMarkers from '../CustomMarkers/CustomMarkers';

class CustomMap extends Component {
    state = {
        startPos: [61.0269511, 25.65371217],
        startZoom: 20
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
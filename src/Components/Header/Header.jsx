import React, { Component } from 'react';
import classes from './Header.module.css';
import { withLeaflet } from 'react-leaflet';
import RoopeImage from '../../Assets/Images/Roope.jpg';

class Header extends Component {
    flyToMarker = (map, markerName) => {
        if (this.pendingPopup) {
            map.off('moveend', this.pendingPopup);
        }

        const targetMarker = this.props.markerRefs[markerName];

        if (!targetMarker) {
            return;
        }

        map.closePopup();
        Object.keys(this.props.markerRefs).forEach(name => {
            const marker = this.props.markerRefs[name];
            if (marker !== targetMarker) {
                marker.closePopup();
            }
        });

        const position = targetMarker.getLatLng();
        const openPopup = () => {
            targetMarker.openPopup();
            this.pendingPopup = null;
        };

        if (map.getCenter().equals(position) && map.getZoom() === 16) {
            openPopup();
            return;
        }

        this.pendingPopup = openPopup;
        map.once('moveend', openPopup);
        map.flyTo(position, 16);
    }

    render() {
        const { map } = this.props.leaflet;

        return (
            <div className={classes.Header}>
                <h2 onClick={() => this.flyToMarker(map, 'Work Experience')}>Work Experience</h2>
                <h2 onClick={() => this.flyToMarker(map, 'Projects')}>Hobby Project</h2>
                <img src={RoopeImage} alt="Roope" />
                <h2 onClick={() => this.flyToMarker(map, 'Studies')}>Studies</h2>
                <h2 onClick={() => this.flyToMarker(map, 'Roope')}>Me</h2>
            </div>
        );
    }
}

export default withLeaflet(Header);
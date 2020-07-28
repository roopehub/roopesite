import React, { Component } from 'react';
import classes from './Header.module.css';
import { withLeaflet } from 'react-leaflet';

class Header extends Component {

    flyTo = (map, coord) => {
        map.flyTo(coord, 16);
    }

    render() {
        const { map } = this.props.leaflet;

        return (
            <div className={classes.Header}>
                <h2 onClick={() => this.flyTo(map, [60.205, 24.933907])}>Programming</h2>
                <h2 onClick={() => this.flyTo(map, [60.199, 24.951029])}>Projects</h2>
                <img src="https://i.imgur.com/XdSAUnv.jpg" />
                <h2 onClick={() => this.flyTo(map, [60.207, 24.962420])}>Geography</h2>
                <h2 onClick={() => this.flyTo(map, [60.23, 25.012640])}>Me</h2>
            </div>
        )
    }
}


export default withLeaflet(Header);
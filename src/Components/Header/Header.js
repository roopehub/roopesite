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
                <img src="https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/p960x960/69092796_10213995935404104_6269808544489406464_o.jpg?_nc_cat=107&_nc_ohc=sKEvN568t-kAQnEaIpNJnJZi40BGQyy7aNxK6Yqv4IAxaJs6v7UXFMdDw&_nc_ht=scontent-hel2-1.xx&oh=39fd732f630fbb93e83bc0408ddd84d3&oe=5E435C4D" />
                <h2 onClick={() => this.flyTo(map, [60.207, 24.962420])}>Geography</h2>
                <h2 onClick={() => this.flyTo(map, [60.23, 25.012640])}>Me</h2>
            </div>
        )
    }
}


export default withLeaflet(Header);
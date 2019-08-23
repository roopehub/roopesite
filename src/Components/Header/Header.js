import React, { Component } from 'react';
import classes from './Header.module.css';
import { withLeaflet } from 'react-leaflet';

class Header extends Component {

    flyTo = (map, coord) => {
        map.flyTo(coord, 17);
    }

    render() {
        const { map } = this.props.leaflet;

        return (
            <div className={classes.Header}>
                <h2 onClick={() => this.flyTo(map, [60.201753, 24.933907])}>Programming</h2>
                <h2 onClick={() => this.flyTo(map, [60.196789, 24.951029])}>Projects</h2>
                <img src="https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/68476700_10213995935364103_19694624075415552_n.jpg?_nc_cat=105&_nc_oc=AQm_pNi-tFNKQmKRt3Az4a33w2t65Q-1aDsXjWrNvb-AQXFCQpd8Hm7sTVobDq3rwqY&_nc_ht=scontent-hel2-1.xx&oh=a05159e2287fa1ee50960e89ba441e97&oe=5DC90B9D" />
                <h2 onClick={() => this.flyTo(map, [60.204776, 24.962420])}>Geography</h2>
                <h2 onClick={() => this.flyTo(map, [60.227617, 25.012640])}>Me</h2>
            </div>
        )
    }
}


export default withLeaflet(Header);
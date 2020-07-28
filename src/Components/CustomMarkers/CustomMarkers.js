import React, { Component } from 'react';
import CustomMarker from '../CustomMarker/CustomMarker';

class CustomMarkers extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    coordinates: [61.0261711, 25.65371217],
                    name: '',
                    image: 'https://scontent-hel2-1.xx.fbcdn.net/v/t1.0-9/116164530_3657834690896837_1763624468134896719_o.jpg?_nc_cat=100&_nc_sid=02d79f&_nc_ohc=jrfkpNXaJf8AX9MeDN5&_nc_ht=scontent-hel2-1.xx&oh=0808989eeea56071697b0189647b2e4b&oe=5F46442D'                    
                }
            ]
        }
    }

    render() {
        return ( 
            this.state.data.map(item => {
                return <CustomMarker location={item.coordinates} item={item} key={item.id}/>
            })
        )
    }
}

export default CustomMarkers;


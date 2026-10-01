import React, { Component } from 'react';
import CustomMarker from '../CustomMarker/CustomMarker';
import meImage from '../../Assets/Images/roope2.jpeg';

class CustomMarkers extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 2,
                    coordinates: [60.204, 24.962],
                    name: 'Studies',
                    image: 'https://images.unsplash.com/photo-1529579134665-75dfc9c5ccef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    
                },
                {
                    id: 3,
                    coordinates: [60.196, 24.951],
                    name: 'Projects',
                    image: ''
                    
                },
                {
                    id: 4,
                    coordinates: [60.214, 24.881],  
                    name: 'Work Experience',
                    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                },
                {
                    id: 1,
                    coordinates: [60.157, 24.931],
                    name: 'Roope',
                    image: meImage
                }
            ]
        }
    }

    render() {
        return ( 
            this.state.data.map(item => {
                return <CustomMarker
                    location={item.coordinates}
                    item={item}
                    key={item.id}
                    markerRefs={this.props.markerRefs}
                    onMarkerRef={this.props.onMarkerRef}
                />
            })
        )
    }
}

export default CustomMarkers;


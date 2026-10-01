import React, { Component } from 'react';
import CustomMarker from '../CustomMarker/CustomMarker';

class CustomMarkers extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 2,
                    coordinates: [60.204776, 24.962420],
                    name: 'Geography',
                    image: 'https://images.unsplash.com/photo-1529579134665-75dfc9c5ccef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    
                },
                {
                    id: 3,
                    coordinates: [60.196789, 24.951029],
                    name: 'Projects',
                    image: ''
                    
                },
                {
                    id: 4,
                    coordinates: [60.201753, 24.933907],  
                    name: 'Programming',
                    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                },
                {
                    id: 1,
                    coordinates: [60.227617, 25.012640],
                    name: 'Roope',
                    image: 'https://i.imgur.com/adCRPsF.jpg'                    
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


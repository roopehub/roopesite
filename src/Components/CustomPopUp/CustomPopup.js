import React, { Component } from 'react';
import classes from './CustomPopup.module.css'
import { Popup } from 'react-leaflet';

class CustomPopup extends Component {
    render() {

        let content = null;

        switch(this.props.item.id) {
            case 1:
                content = 
                <React.Fragment>
                    <p> I am a 25-year-old geography student from Uni Helsinki.
                        I have background and degree with front-end focused software development.
                        My goal is to be able to combine geography with programming.
                        I aim to study GIS with computer science and physical geography.
                        I like to hike and practice culinaristic manners!
                        <hr />
                        <i>Click links or markers for more!</i>
                        </p>
                </React.Fragment>
                break;
            case 2:
                content = 
                <React.Fragment>
                    <p> I'm 3rd year student in uni Helsinki.
                        My studies focus on GIS and physical geography but I also like to mix things up with other interesting courses.
                        I have used Qgis, ArcMap, SASS and Corel in my studies. I also have used or am going to use Python and R. 
                        *insert map from course*
                    </p>
                </React.Fragment>
                break;
            case 3:
                content = 
                <React.Fragment>
                    <p>Here's my most noticable projects</p>
                    <a href="https://opiskalija.herokuapp.com"> img </a>
                    <div>
                        <h3>Opiskalija</h3>
                        <i>Cheapest beers in bars visualized, find the cheapest beer and get there asap!</i>
                    </div>
                </React.Fragment>
                break;
            case 4: 
                content = 
                <React.Fragment>
                    <p> I have bachelor of computer science (tietojenkäsittely - tradenomi) degree from HAAGA-HELIA and +2 years of professional experience as junior webdeveloper</p>
                    <h3>Comfortable with</h3>
                    <ul>
                        <li> ReactJS </li>
                        <li> AngularJS</li>
                        <li> HTML5 & CSS (sass, less)</li>
                        <li> MongoDb </li>
                        <li> SQL </li>
                    </ul>
                    <h3>Learning / going to learn more</h3>
                    <ul>
                        <li>NodeJS</li>
                        <li>Python</li>
                        <li>R</li>
                    </ul>
                    <h3>Also experience with</h3>
                    <ul>
                        <li>C##</li>
                        <li>Java</li>
                    </ul>
                </React.Fragment>
                break;
            default:
                return null;
        }

        return (
            <Popup className={classes.Popup}>
                <img src={this.props.item.image} />
                <h2>{this.props.item.name}</h2>
                { content }
            </Popup>
        )
    }
}

export default CustomPopup;
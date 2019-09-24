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
                    <p> I am 25-year-old geography student from Uni Helsinki.
                        I have background and degree with front-end focused software development.
                        My goal is to be able to combine geography with programming.
                        I aim to study GIS with computer science and physical geography.
                        I like to hike and practice culinaristic manners!
                    </p>
                    <br/>
                    <i>Click links or markers for more!</i>
                    <hr />
                    <p>Contact me: roope.heinonen94@gmail.com</p>
                </React.Fragment>
                break;
            case 2:
                content = 
                <React.Fragment>
                    <p> I'm 3rd year student in uni Helsinki.
                        My studies focus on GIS and physical geography but I also like to mix things up with other interesting courses.
                        I have used Qgis, ArcMap, SASS and Corel in my studies. I also have used or am going to use Python and R. 
                    </p>
                    <h3>Blog and maps from courses</h3>
                    <a href="https://blogs.helsinki.fi/hcroope/" target="_blank" rel="noopener noreferrer">
                        <p style={{textDecoration: 'underline', color: 'turquoise'}}>Blog from one of first GIS courses</p>
                    </a>
                    <div>
                        <img src="https://i.ibb.co/LnRPfww/closest-facility.png" alt="img map" />
                        <img src="https://i.ibb.co/6FtKMsV/location-allocation.png" alt="img map" />
                    </div>
                </React.Fragment>
                break;
            case 3:
                content = 
                <React.Fragment>
                    <a href="https://opiskalija.herokuapp.com" target="_blank" rel="noopener noreferrer"> 
                        <div className={classes.Project} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)'}}>
                            {/* <img src="" alt="beers image"/> */}
                            <div className={classes.ProjectContent}>
                                <h3> <strong style={{color: 'lightBlue'}}>New! </strong>Opiskalija</h3>
                                <i>Cheapest beers in bars visualized, find the cheapest beer and get there asap!</i>
                            </div>
                        </div>
                    </a>
                    <br/>
                    <div className={classes.Project} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1447279506476-3faec8071eee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)'}}>
                        <div className={classes.ProjectContent}>
                            <h3> <strong style={{color: 'green'}}>Coming soon! </strong>Le cheff - recipes</h3>
                            <i>The only recipe book you'll ever need again!</i>
                        </div>
                    </div>
                    <br/>
                    <a href="https://roopeheinonen.netlify.com/#/" target="_blank" rel="noopener noreferrer"> 
                        <div className={classes.Project} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)'}}>
                            <div className={classes.ProjectContent}>
                                <h3>Old Roopesite</h3>
                                <i>Cv & portfolio site: one of my first frontend projects (using Angular 1)</i>
                            </div>
                        </div>
                    </a>
                    <br/>
                    <a href="https://squadapp.netlify.com/" target="_blank" rel="noopener noreferrer"> 
                        <div className={classes.Project} style={{backgroundImage: 'url(https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)'}}>
                            <div className={classes.ProjectContent}>
                                <h3><strong style={{color: 'red'}}>Not working atm.</strong> Squadapp</h3>
                                <i>Listing my squad according competitive MMR (match making ranking) + statistics. </i>
                            </div>
                        </div>
                    </a>
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
                        <li> ...and others I forgot</li>
                    </ul>
                    <h3>Also experience with</h3>
                    <ul>
                        <li>C##<i> | work </i></li>
                        <li>Java<i> | school</i></li>
                    </ul>
                    <h3>Learning / going to learn more</h3>
                    <ul>
                        <li>NodeJS</li>
                        <li>Python</li>
                        <li>R</li>
                    </ul>
                </React.Fragment>
                break;
            default:
                return null;
        }

        return (
            <Popup className={classes.Popup}>
                {
                    this.props.item.image ? <img src={this.props.item.image} /> : null
                }
                <h2>{this.props.item.name}</h2>
                { content }
            </Popup>
        )
    }
}

export default CustomPopup;
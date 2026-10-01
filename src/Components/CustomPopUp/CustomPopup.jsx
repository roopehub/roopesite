import React, { Component } from 'react';
import classes from './CustomPopup.module.css'
import { Popup, withLeaflet } from 'react-leaflet';

const markerOrder = ['Roope', 'Studies', 'Projects', 'Work Experience'];

class CustomPopup extends Component {
    goToNext = () => {
        const nextName = markerOrder[this.props.item.id % markerOrder.length];
        const targetMarker = this.props.markerRefs[nextName];
        const map = this.props.leaflet.map;

        map.closePopup();
        map.once('moveend', () => targetMarker.openPopup());
        map.flyTo(targetMarker.getLatLng(), 16);
    }

    render() {
        let content = null;
        switch (this.props.item.id) {
            case 1:
                content =
                    <React.Fragment>
                        <p>I am a 32-year-old GIS-focused programmer from Finland.</p>
                        <p>I have an MSc in Geography from the University of Helsinki and a bachelor's degree in Computer Science from Haaga-Helia University of Applied Sciences.
                        </p>
                        <p>
                            I have more than seven years of professional experience as a software developer. My goal is to combine my knowledge of programming and geography in my work.
                            In my free time, I like to play sports and drums, and navigate my way around GeoGuessr!
                        </p>
                        <i>Click links or markers for more!</i>
                        <hr />
                        <p>Contact me: roope.heinonen94@gmail.com</p>
                    </React.Fragment>
                break;
            case 2:
                content =
                    <React.Fragment>
                        <p>I have a bachelor's degree in Computer Science from Haaga-Helia University of Applied Sciences and an MSc in Geography from the University of Helsinki.</p>
                        <p>
                            I completed my master's thesis for the GREENTRAVEL project, where I developed <a href="https://github.com/DigitalGeographyLab/green-paths-2" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>a tool</a> for analyzing travel-time exposure using Conveyal's R5 routing engine. The tool can be used anywhere with relevant data.
                        </p>
                        <p>
                            My <a href="https://helda.helsinki.fi/items/5b77f6c3-2d2c-455f-bb8c-528b0ac136d8" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>MSc thesis</a> focused on building this tool. I was also honored to be mentioned in <a href="https://www.sciencedirect.com/science/article/pii/S0198971524000978" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>this article</a>.
                        </p>
                    </React.Fragment>
                break;
            case 3:
                content =
                    <React.Fragment>
                        <a href="https://github.com/roopehub" target="_blank" rel="noopener noreferrer">
                            <div className={classes.Project} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                                <div className={classes.ProjectContent}>
                                    <h3>My Github</h3>
                                    <i>University repositories, hobby projects, and assorted other projects</i>
                                </div>
                            </div>
                        </a>
                        <br />
                        <a href="https://opiskalija.pages.dev/" target="_blank" rel="noopener noreferrer">
                            <div className={classes.Project} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)' }}>
                                <div className={classes.ProjectContent}>
                                    <h3>Opiskalija</h3>
                                    <i>Visualizes the cheapest beers at bars. Find the cheapest beer and get there ASAP!</i>
                                    <p>My hobby project from summer 2019</p>
                                </div>
                            </div>
                        </a>
                    </React.Fragment>
                break;
            case 4:
                content =
                    <React.Fragment>
                        <p>I have more than seven years of professional experience as a software developer. I started as a front-end web developer and have since pivoted to full-stack development.
                            In recent years, I have developed several QGIS plugins using the QGIS Python API.</p>
                        <br />
                        <h3>Technical skills</h3>
                        <ul>
                            <li> Python </li>
                            <li> QGIS Python API</li>
                            <li> SQL </li>
                            <li> CI/CD </li>
                            <li> JavaScript (e.g., React, Next.js) </li>
                            <li> HTML5 & CSS </li>
                            <li> AWS </li>
                            <li> Azure </li>
                            <li> Jira </li>
                            <li> Java </li>
                            <li> Agile development / Scrum </li>
                        </ul>
                    </React.Fragment>
                break;
            default:
                return null;
        }

        return (
            <Popup
                className={classes.Popup}
                autoPanPaddingTopLeft={[12, Math.ceil(window.innerHeight * 0.25) + 12]}
                autoPanPaddingBottomRight={[12, 12]}
            >
                {
                    this.props.item.image ? (
                        <img
                            src={this.props.item.image}
                            style={this.props.item.id === 1 ? { width: '100%', height: '100%' } : undefined}
                        />
                    ) : null
                }
                <h2>{this.props.item.name}</h2>
                {content}
                <button className={classes.Next} onClick={this.goToNext}>
                    &rarr; Next
                </button>
            </Popup>
        )
    }
}

export default withLeaflet(CustomPopup);
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
                        <p> I am 32-year-old GIS focused programmer from Finland. </p>
                        <p>I have MsC in Geography (University of Helsinki) and bachelor's degree in Computer Science (Haaga-helia university of applied sciences).
                        </p>
                        <p>
                            I have +7 years of professional experience as software developer. My goal is to combine my knowledge of programming and geography in my work.
                            In my free time, i like to do sports, play drums and navigate my way in Geoguessr!
                        </p>
                        <i>Click links or markers for more!</i>
                        <hr />
                        <p>Contact me: roope.heinonen94@gmail.com</p>
                    </React.Fragment>
                break;
            case 2:
                content =
                    <React.Fragment>
                        <p> I have bachelors in computer science (Haaga-helia university of applied sciences) and GIS MsC from University of Helsinki.</p>
                        <p>
                            For my GIS master thesis, i coded <a href="https://github.com/DigitalGeographyLab/green-paths-2" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>a tool</a> for analyzing travel time exposure (utilizing Conveyal's r5 routing engine), which can be used in any place and with any relevant data.
                        </p>
                        <p>
                            My <a href="https://helda.helsinki.fi/items/5b77f6c3-2d2c-455f-bb8c-528b0ac136d8" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>MsC thesis</a> was based around building this tool. I also honored to be mentioned in <a href="https://www.sciencedirect.com/science/article/pii/S0198971524000978" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>this article</a>.
                        </p>
                    </React.Fragment>
                break;
            case 3:
                content =
                    <React.Fragment>
                        <a href="https://opiskalija.pages.dev/" target="_blank" rel="noopener noreferrer">
                            <div className={classes.Project} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)' }}>
                                <div className={classes.ProjectContent}>
                                    <h3>Opiskalija</h3>
                                    <i>Cheapest beers in bars visualized, find the cheapest beer and get there asap!</i>
                                    <p>My hobby project for summer 2019</p>
                                </div>
                            </div>
                        </a>
                    </React.Fragment>
                break;
            case 4:
                content =
                    <React.Fragment>
                        <p>I have +7 years of professional experience as software developer. I started as frontend web developer and since have pivoted to fullstack development.
                            Recent years I have been developing several QGIS plugin with QGIS python API.</p>
                        <br />
                        <h3>Technical Skills with work experience</h3>
                        <ul>
                            <li> Python </li>
                            <li> QGIS python API</li>
                            <li> SQL </li>
                            <li> CI/CD </li>
                            <li> Javascript (e.g. React, Next.js) </li>
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
                    this.props.item.image ? <img src={this.props.item.image} /> : null
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
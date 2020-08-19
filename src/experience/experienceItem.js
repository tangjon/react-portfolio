import React from "react";
import './experienceItem.css';

export default class ExperienceItem extends React.Component {
    render() {
        return (
            <div className="ExperienceItem">
                <img className="experience-logo" src={this.props.logo}/>
                <div className="experience-body">
                    <h3 className="experience-title"><strong>{this.props.title}</strong></h3>
                    <div className="experience-title"><strong>{this.props.title}</strong></div>
                    <div className="experience-meta">{this.props.date} - {this.props.location} </div>
                </div>
                <a href="#" className="btn btn-sm btn-outline-dark mr-1">More Info</a>
            </div>
        )
    }
}
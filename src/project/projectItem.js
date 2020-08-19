import React from 'react';
import './projectItem.css';
import icon_bootstrap from '../assets/language-logos/bootstrap.png';
import icon_nodejs from '../assets/language-logos/nodejs.png';
import icon_angular from '../assets/language-logos/angular.png';
import icon_mysql from '../assets/language-logos/mysql.jpg';
import icon_python from '../assets/language-logos/python.png';
import icon_django from '../assets/language-logos/django.png';
import icon_android from '../assets/language-logos/android.png';


export default class ProjectItem extends React.Component {

    icons = {
        "bootstrap": icon_bootstrap,
        "nodejs": icon_nodejs,
        "angular": icon_angular,
        "mysql": icon_mysql,
        "django": icon_django,
        "python": icon_python,
        "android": icon_android,
    }

    render() {
        return (
            <div className="ProjectItem">
                <h3 className="project-title"><strong>{this.props.title}</strong></h3>
                <div className="project-body">
                    <div className="project-description">{this.props.description}
                    </div>
                    <div className="project-meta">
                        <div className="project-languages">
                            {this.props.languages && this.props.languages.map(value => {
                                return <img title={value} className="language-icon mr-1" alt={value}
                                            src={this.icons[value]}/>
                            })}
                        </div>
                        <div className="project-date">{this.props.date}</div>
                    </div>
                </div>
                <div className="project-links">
                    {this.props.site_link &&
                    <a href={this.props.site_link} className="btn btn-sm btn-outline-dark mr-1">Visit Site</a>}
                    {this.props.github_link &&
                    <a href={this.props.github_link} className="btn btn-sm btn-outline-dark">View on Github</a>}
                </div>
            </div>
        );
    }
}
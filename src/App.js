import React from 'react';
import './App.css';
import logo from './assets/headshot.jpg';
import ExperienceItem from "./experience/experienceItem";
import logo_sap from "./assets/company-logos/sap.png";
import logo_safe from "./assets/company-logos/safesoftware.png";
import logo_qmcd from "./assets/project-logos/qmcd.png";
import logo_carbon_tracker from "./assets/project-logos/carbon-tracker.png";
import logo_pc_part_picker from "./assets/project-logos/bapc.png";

import ProjectItem from "./project/projectItem";

function App() {
    return (
        <div className="App container">
            <div className="header">
                <img src={logo} alt="Jonathan Tang" className="profile-picture"/>
                <hr className="divider"/>
                <h1>Jonathan Tang</h1>
                <div className="portfolio-links">
                    <a href="https://github.com/tangjon">Github</a>
                    <span>•</span>
                    <a href="https://www.linkedin.com/in/tangjoncl/">LinkedIn</a>
                    <span>•</span>
                    <a href="#">Email</a>
                </div>
            </div>
            <div id="experiences" className="section">
                <div className="section-title">EXPERIENCE</div>
                <div className="section-body">
                    <ExperienceItem title="Python Software Developer"
                                    logo={logo_safe}
                                    date="September 2019 to August 2020"
                                    location="Surrey, BC Canada"
                                    description={
                                        <>
                                            My second coop experience that resulted in an extension of 8 additional
                                            months,
                                            totalling to 12 months working with the wonderful and collaborative Python
                                            Cloud Connectors team. My main task here were
                                            <ul className="mt-1">
                                                <li>Integrate popular APIs, tools, frameworks into the FME platform
                                                    as an easily maintainable plugin.
                                                </li>
                                                <li>Lead developer on integrating the load actions Google BigQuery
                                                    Connector and Writer, that allowed users to load their data
                                                    seamlessly
                                                    onto the Google BigQuery platform with the support spatial data.
                                                </li>
                                                <li>Add improvements to the Jenkins pipeline and introduce automation to
                                                    common internal work processes.
                                                </li>
                                                <li>
                                                    Deliver and provide product presentations to the company.
                                                </li>
                                            </ul>
                                        </>
                                    }
                    />
                    <ExperienceItem title="Product Support Engineer"
                                    logo={logo_sap}
                                    date="January 2018 to August 2018"
                                    location="Vancouver, BC Canada"
                                    description={
                                        <>
                                            My first coop experience that lasted an amazing 8 with the SAP Product
                                            Support Team.
                                            Over the experience, I diagnosed and analyzed over 300 customer incidents
                                            with clear communication,
                                            and collaborated on tackling issues with the team. I also had the unique
                                            opportunity
                                            to develop an internal tool that helped streamline work distribution
                                            throughout team that
                                            increased incident processing times times.
                                        </>
                                    }
                    />
                </div>
            </div>
            <div className="section">
                <div className="section-title">PROJECTS</div>
                <div className="section-body">
                    <ProjectItem
                        title="Computer Parts Picker"
                        languages={["django", "python", "bootstrap"]}
                        date="August 2018"
                        logo={logo_pc_part_picker}
                        site_link="http://bapc.io"
                        github_link="https://github.com/tangjon/Build-a-PC-Configuration-Tool"
                        description="Full-stack Django project that allows users to virtually create and view multiple
                        computer configurations to estimate costs and leave reviews on computer components."
                    />

                    <ProjectItem
                        title="Job Distribution System"
                        logo={logo_qmcd}
                        languages={["angular", "nodejs", "mysql"]}
                        date="January 2018"
                        github_link="https://github.com/tangjon/queue-manager-client"
                        description="A full-stack Angular, Node.Js, MySQL solution to distributing work to users across
                        different work hours which was heavily utilized in a professional environment. Features a
                        frontend and backend. This application can track units of work done by user. Toggle
                        availability to be assigned tickets. Place a cap on work for a user per day."
                    />

                    <ProjectItem
                        title="33rd Kerrisdale Scout Group Website"
                        languages={["wordpress"]}
                        date="June 2015 - Present"
                        github_link="https://github.com/tangjon/cmpt276-carbon-tracker"
                        description="WordPress powered group landing site for a local Scout Group. Aimed to inform new and
                        existing visitors about the Scout Group. Implemented custom WordPress UI widgets and CSS theme."
                    />

                    <ProjectItem
                        title="Carbon Tracker"
                        languages={["android"]}
                        logo={logo_carbon_tracker}
                        date="January 2017 - April 2017"
                        github_link="https://github.com/tangjon/cmpt276-carbon-tracker"
                        description="Android application that tracks and calculates carbon usages and emission from
                        commuting point A to B. Graphs and statistics are displayed to the user about the their carbon
                        footprint."
                    />

                    <ProjectItem
                        title="tangjon.github.io"
                        languages={["react", "bootstrap"]}
                        date="Ongoing"
                        github_link="https://github.com/tangjon/react-portfolio"
                        description="
                        An ongoing portfolio to capture my notable experiences and projects. First started as a jekyll
                        powered portfolio then later to Angular and now React.Js.
                        This site continues to iterate with new technologies and design. The current approach features
                        project and experience entries as html components which are parameterized and easily maintainable."
                    />
                </div>
            </div>
        </div>
    );
}

export default App;

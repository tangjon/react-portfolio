import React from 'react';
import './section.css';
import ProjectItem from "./projectItem";
import ExperienceItem from "../experience/experienceItem";

import logo_sap from "../assets/company-logos/sap.png"

export default function Section() {

    return (
        <div>
            <div className="Section">
                <div className="section-title">EXPERIENCE</div>
                <div id="experiences" className="section-body">
                    <ExperienceItem title="Product Support Engineer" logo={logo_sap} date="Sept 2018" location="Vancouver, BC Canada"/>
                </div>
            </div>
            <div className="Section">
                <div className="section-title">PROJECTS</div>
                <div className="section-body">
                    <ProjectItem
                        title="tangjon.github.io with React.Js revamp"
                        languages={["react", "bootstrap"]}
                        date="August 2020"
                        github_link="https://github.com/tangjon/react-portfolio"
                        description="Revamp my original Angular powered portolio with React.Js with a simple and more
                        maintainable design. Design and project items are modular, parameterized and easily editable."
                    />

                    <ProjectItem
                        title="Computer Parts Picker"
                        languages={["django", "python", "bootstrap"]}
                        date="Aug 2018"
                        site_link="http://bapc.io"
                        github_link="https://github.com/tangjon/Build-a-PC-Configuration-Tool"
                        description="Full-stack Django project that allows users to virtually create and view multiple
                        computer configurations to estimate costs and leave reviews on computer components."
                    />

                    <ProjectItem
                        title="Job Distribution System"
                        languages={["angular", "nodejs", "mysql"]}
                        date="Jan 2018"
                        github_link="https://github.com/tangjon/queue-manager-client"
                        description="A work load distribution system that aims to balance work loads of many users within
                        a team."
                    />

                    <ProjectItem
                        title="33rd Kerrisdale Scout Group Website"
                        languages={["wordpress"]}
                        date="Jun 2015 - Present"
                        github_link="https://github.com/tangjon/cmpt276-carbon-tracker"
                        description="WordPress powered group landing site for a local Scout Group. Aimed to inform new and
                        existing visitors about the Scout Group. Practiced CSS and implemented custom WordPress UI widgets."
                    />

                    <ProjectItem
                        title="Carbon Tracker"
                        languages={["android"]}
                        date="Jan 2017 - April 2017"
                        github_link="https://github.com/tangjon/cmpt276-carbon-tracker"
                        description="Android application that tracks and calculates carbon usages and emission from
                        commuting point A to B. Graphs and statistics are displayed to the user about the their carbon
                        footprint."
                    />
                </div>
            </div>


        </div>

    );
}
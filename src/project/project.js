import React from 'react';
import './project.css';
import ProjectItem from "./projectItem";

export default function Project() {

    return (
        <div className="Project">
            <div className="section-title">PROJECTS</div>
            <div className="section-body">
                <ProjectItem
                    title="Job Distribution System"
                    languages={["angular", "nodejs", "mysql"]}
                    date="Jan 2018"
                    github_link="https://github.com/tangjon/queue-manager-client"
                    description="A work load distribution system that aims to balance work loads of many users within
                    a team."
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
    );
}
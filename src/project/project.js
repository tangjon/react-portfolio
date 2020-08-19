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
                    description="A work load distribution system that aims to balance work loads of many users within a team."
                />
            </div>
        </div>
    );
}
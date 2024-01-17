import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from "react";

const JustifiedExample: React.FC = () => {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="intro" title="Intro">
                Tab content for Home
            </Tab>

            <Tab eventKey="skills" title="Skills">
                Tab content for Profile
            </Tab>

            <Tab eventKey="carrers" title="Carrers">
                Tab content for Loooonger Tab
            </Tab>

            <Tab eventKey="licenses" title="Licenses">
                Tab content for Contact
            </Tab>

            <Tab eventKey="educations" title="Educations">
                Tab content for Contact
            </Tab>
        </Tabs>
    );
}

export default JustifiedExample;
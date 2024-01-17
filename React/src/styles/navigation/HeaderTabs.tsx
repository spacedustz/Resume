import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from "react";
import Introduce from "../../components/Introduce.tsx";
import SkillList from "../card/SkillList.tsx";

const HeaderTabs: React.FC = () => {
    return (
        <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
        >
            <Tab eventKey="intro" title="Intro">
                <Introduce />
            </Tab>

            <Tab eventKey="skills" title="Skills">
                <SkillList />
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

export default HeaderTabs;
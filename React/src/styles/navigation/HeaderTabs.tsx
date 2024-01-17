import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from "react";
import Introduce from "../../components/Introduce.tsx";
import SkillList from "../card/SkillList.tsx";
import styled from "styled-components";

const TabsStyle = styled(Tabs)`
    button {
        color: white;
        
        &:hover {
            background-color: dimgray;
            color: white;
            transform: scale(1.12);
            transition: color 0.5s;
        }
    }
`;

const HeaderTabs: React.FC = () => {
    return (
        <TabsStyle
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

            <Tab eventKey="careers" title="Careers">
                Tab content for Loooonger Tab
            </Tab>

            <Tab eventKey="licenses" title="Licenses">
                Tab content for Contact
            </Tab>

            <Tab eventKey="educations" title="Educations">
                Tab content for Contact
            </Tab>
        </TabsStyle>
    );
}

export default HeaderTabs;
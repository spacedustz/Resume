import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, {useState} from "react";
import styled from "styled-components";
import {Outlet, useNavigate} from "react-router-dom";

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
    const [activeKey, setActiveKey] = useState<string>("intro");
    const navigate = useNavigate();

    const handleSelect = (k: string|null) => {
        if (k) {
            setActiveKey(k);
            navigate(`/${k}`);
        }
    }

    return (
        <TabsStyle
            defaultActiveKey="/"
            id="justify-tab-example"
            className="mb-3"
            justify
            activeKey={activeKey} // 현재 활성화 탭의 eventKey를 설정
            onSelect={handleSelect} // 탭을 선택할때마다 활성화된 탭의 eventKey 업데이트
        >
            <Tab eventKey="intro" title={<span style={activeKey === "intro" ? {color: "lightblue"} : {}}>Intro</span>}>
                <Outlet/>
            </Tab>

            <Tab eventKey="skills" title={<span style={activeKey === "skills" ? {color: "lightblue"} : {}}>Skills</span>}>
                <Outlet/>
            </Tab>

            <Tab eventKey="careers" title="Careers">
                <Outlet/>
            </Tab>

            <Tab eventKey="licenses" title="Licenses">
                <Outlet/>
            </Tab>

            <Tab eventKey="educations" title="Educations">
                <Outlet/>
            </Tab>
        </TabsStyle>
    );
}

export default HeaderTabs;
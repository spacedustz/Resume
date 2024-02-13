import React, {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import {TabsStyle} from "../styles/tabs/HeaderTabs.ts";

const HeaderTabs: React.FC = () => {
    const [activeKey, setActiveKey] = useState<string>("intro");
    const navigate = useNavigate();

    const handleSelect = (k: string|null) => {
        if (k) {
            setActiveKey(k);
            navigate(`/${k}`, { replace: true });

        }
    }

    useEffect(() => {
        const currentPath = location.pathname;

        switch (currentPath) {
            case '/intro':
                setActiveKey('intro');
                break;
            case '/skills':
                setActiveKey('skills');
                break;
            case '/careers':
                setActiveKey('careers');
                break;
            case '/licenses':
                setActiveKey('licenses');
                break;
            case '/educations':
                setActiveKey('educations');
                break;
            default:
                setActiveKey('intro');
        }
    }, [location.pathname]);

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

            <Tab eventKey="techstack" title={<span style={activeKey === "techstack" ? {color: "lightblue"} : {}}>Tech Stacks</span>}>
                <Outlet/>
            </Tab>

            <Tab eventKey="careers" title={<span style={activeKey === "careers" ? {color: "lightblue"} : {}}>Careers</span>}>
                <Outlet/>
            </Tab>

            <Tab eventKey="licenses" title={<span style={activeKey === "licenses" ? {color: "lightblue"} : {}}>Licenses</span>}>
                <Outlet/>
            </Tab>

            <Tab eventKey="educations" title={<span style={activeKey === "educations" ? {color: "lightblue"} : {}}>Educations</span>}>
                <Outlet/>
            </Tab>
        </TabsStyle>
    );
}

export default HeaderTabs;
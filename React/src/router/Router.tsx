import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderTabs from "../styles/navigation/HeaderTabs.tsx";
import Introduce from "../components/Introduce.tsx";
import SkillList from "../components/Skills.tsx";
import Careers from "../components/Careers.tsx";
import Licenses from "../components/Licenses.tsx";
import Educations from "../components/Educations.tsx";

const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<HeaderTabs />}>
                        <Route path="intro" element={<Introduce />} />
                        <Route path="skills" element={<SkillList />} />
                        <Route path="careers" element={<Careers />} />
                        <Route path="licenses" element={<Licenses />} />
                        <Route path="educations" element={<Educations />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
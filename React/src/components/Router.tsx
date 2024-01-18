import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderTabs from "../styles/navigation/HeaderTabs.tsx";
import Introduce from "./Introduce.tsx";
import SkillList from "../styles/card/SkillList.tsx";

const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<HeaderTabs />}>
                        <Route path="intro" element={<Introduce />} />
                        <Route path="skills" element={<SkillList />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
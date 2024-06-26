import React, {Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Introduce from "../components/Introduce.tsx";
import Careers from "../components/Careers.tsx";
import Licenses from "../components/Licenses.tsx";
import Educations from "../components/Educations.tsx";
import HeaderTabs from "../components/HeaderTabs.tsx";
import Navigation from "../components/Navigation.tsx";
import ProfileCard from "../components/ProfileCard.tsx";
import TechStacks from "../components/TechStacks.tsx";

const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <ProfileCard />
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/*" element={<HeaderTabs/>}>
                            <Route path="intro" element={<Introduce/>}/>
                            <Route path="techstack" element={<TechStacks />}/>
                            <Route path="careers" element={<Careers/>}/>
                            <Route path="licenses" element={<Licenses/>}/>
                            <Route path="educations" element={<Educations/>}/>
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    );
};

export default Router;
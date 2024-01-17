import React from 'react';
import HeaderTabs from "./styles/navigation/HeaderTabs.tsx";
import ProfileCard from "./styles/card/ProfileCard.tsx";
import {RootContainer} from "./styles/container/RootContainer.tsx";
import Navigation from "./styles/navigation/Navigation.tsx";

const App: React.FC = () => {

    return (
        <RootContainer>
            <Navigation />
            <ProfileCard/>
            <HeaderTabs/>
        </RootContainer>
    )
}

export default App;

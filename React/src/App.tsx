import React from 'react';
import HeaderTabs from "./styles/navigation/HeaderTabs.tsx";
import ProfileCard from "./styles/card/ProfileCard.tsx";
import {RootContainer} from "./styles/container/RootContainer.tsx";

const App: React.FC = () => {

    return (
        <RootContainer>
            <ProfileCard/>
            <HeaderTabs/>
        </RootContainer>
    )
}

export default App;

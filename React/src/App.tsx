import React from 'react';
import ProfileCard from "./styles/card/ProfileCard.tsx";
import {RootContainer} from "./styles/container/RootContainer.tsx";
import Navigation from "./styles/navigation/Navigation.tsx";
import Router from "./router/Router.tsx";

const App: React.FC = () => {

    return (
        <RootContainer>
            <Navigation />
            <ProfileCard/>
            <Router />
        </RootContainer>
    )
}

export default App;

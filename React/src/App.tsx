import React from 'react';
import {RootContainer} from "./styles/container/RootContainer.ts";
import Router from "./router/Router.tsx";

const App: React.FC = () => {

    return (
        <RootContainer>
            <Router />
        </RootContainer>
    )
}

export default App;

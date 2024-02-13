import Tabs from 'react-bootstrap/Tabs';
import styled from "styled-components";

export const TabsStyle = styled(Tabs)`
    overflow: hidden;
    
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
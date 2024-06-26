import Tabs from 'react-bootstrap/Tabs';
import styled from "styled-components";

export const TabsStyle = styled(Tabs)`
    overflow: hidden;
    //background-color: lightblue;

    &.mb-3 {
        margin-bottom: 0 !important;
    }

    button {
        color: white;

        &:hover {
            background-color: dimgray;
            color: black;
            transition: color 0.5s;
        }
    }

    @media (max-width: 768px) {
        .tab-pane {
            min-height: 100vh;
        }

        span {
            font-size: 12px;
        }
    }
`;
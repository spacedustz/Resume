import Card from 'react-bootstrap/Card';
import {Container} from "react-bootstrap";
import styled from "styled-components";
import {NavColorChange} from "../animation/TextColor.ts";

export const CardContainer = styled(Container)`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 20px;

    img {
        width: 200px;
    }

    a {
        text-decoration: none;
        color: cadetblue;
        font-weight: 700;

        &:hover {
            transform: scale(1.12);
            transition: color 0.5s;
        }
    }
    
    div, h5, h6 {
        font-weight: bold;
        color: black;
        //animation: ${NavColorChange} 3s infinite;
    }
`;

export const MainCard = styled(Card)`
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h5`
    font-size: 20px;
`;
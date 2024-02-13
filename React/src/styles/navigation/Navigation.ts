import Navbar from 'react-bootstrap/Navbar';
import styled, {keyframes} from "styled-components";

export const colorChange = keyframes`
    0% {
        background-color: rgba(250, 250, 210, 0);
        color: rgba(250, 250, 210, 0.5);
    }
    50% {
        background-color: rgba(250, 250, 210, 0);
        color: rgba(250, 250, 210, 0.8);
    }
    100% {
        background-color: rgba(250, 250, 210, 0);
        color: rgba(250, 250, 210, 0.5);
    }
`;

export const NavStyle = styled(Navbar)`
    a {
        margin: 2px;
        animation: ${colorChange} 3s infinite;
        
        &:hover {
            background-color: rgba(250, 250, 210, 0.5);
            color: rgba(250, 250, 210, 0.5);
            transform: scale(1.12);
            transition: color 0.5s;
            animation: none;
        }
    }
`;

export const ImageStyle = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;

    @media (max-width: 768px) {
        width: 15px;
        height: 15px;
        margin-right: 2px;
    }
`;
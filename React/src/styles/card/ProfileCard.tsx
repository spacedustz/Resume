import Card from 'react-bootstrap/Card';
import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";

const CardContainer = styled(Container)`
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: center;

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
    
    div {
        font-weight: bold;
    }
    
    p {
        font-size: 15px;
    }
`;

const MainCard = styled(Card)`
    background-color: rgba(250, 250, 210, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const ProfileCard: React.FC = () => {
    return (
        <CardContainer>
            <MainCard style={{width: '20rem'}}>
                <Card.Img variant="top" src="../../public/assets/me2.png"/>
                <Card.Body>
                    <Card.Title>신건우</Card.Title>
                    <Card.Text>
                        안녕하세요, 개발자 신건우입니다.
                    </Card.Text>
                </Card.Body>
            </MainCard>
        </CardContainer>
    );
}

export default ProfileCard;
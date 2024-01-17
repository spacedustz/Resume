import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";

const CardContainer = styled(Container)`
    border-bottom: 1px solid gray;

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
`;

const ButtonContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
`;

const ProfileCard: React.FC = () => {
    return (
        <CardContainer>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="../../public/assets/me.png"/>
                <Card.Body>
                    <Card.Title>신건우</Card.Title>
                    <Card.Text>
                        안녕하세요, 개발자 신건우입니다.
                    </Card.Text>
                    <ButtonContainer>
                        <Button variant="dark"><a href="https://github.com/spacedustz" target="_blank">Github</a></Button>
                        <Button variant="dark"><a href="https://iizz.tistory.com" target="_blank">Teck Blog</a></Button>
                    </ButtonContainer>
                </Card.Body>
            </Card>
        </CardContainer>
    );
}

export default ProfileCard;
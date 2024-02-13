import React from "react";
import Card from "react-bootstrap/Card";
import {CardContainer, MainCard, Title} from "../styles/card/ProfileCard.ts";

const ProfileCard: React.FC = () => {
    return (
        <CardContainer>
            <MainCard style={{width: '20rem'}}>
                <Card.Img variant="top" src="../../public/assets/me2.png"/>
                <Card.Body>
                    <Title>😊 안녕하세요 😊</Title><br/>
                    <strong>개발자 신건우입니다.</strong><br/>
                    <strong>spacedustw@gmail.com</strong>
                </Card.Body>
            </MainCard>
        </CardContainer>
    );
}

export default ProfileCard;
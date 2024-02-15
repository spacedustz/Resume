import React from "react";
import Card from "react-bootstrap/Card";
import {CardContainer, MainCard} from "../styles/card/ProfileCard.ts";

const ProfileCard: React.FC = () => {
    return (
        <CardContainer>
            <MainCard style={{width: '20rem'}}>
                <Card.Img variant="top" src="../../public/assets/profile/transparent-developer-black-skw.png"/>
                <Card.Body>
                    <strong>😊 안녕하세요 😊</strong><br/>
                    <p>개발자 신건우입니다.</p>
                    <p>spacedustw@gmail.com</p>
                </Card.Body>
            </MainCard>
        </CardContainer>
    );
}

export default ProfileCard;
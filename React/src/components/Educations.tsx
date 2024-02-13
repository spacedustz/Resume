import React from "react";
import {ListContainer} from "../styles/container/ListContainer.ts";
import {ListItem} from "../styles/tabs/ListItem.ts";
import styled from "styled-components";
import {ListGroupItem, Table} from "react-bootstrap";

const StyledTable = styled(Table)`
    table {
        border-collapse: collapse;
        margin-top: 20px;
        font-size: 14px;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: center;
        background-color: rgba(250, 250, 210, 0.3);
    }

    th {
        background-color: rgba(211, 211, 211, 0.3);
    }

    td:nth-child(1) {
        width: 10%;
    }

    td:nth-child(2) {
        width: 20%;
    }

    td:nth-child(3) {
        width: 5%;
    }

    ul {
        font-size: 14px;
    }

    li {
        text-align: left;
        list-style-type: square;
    }
`;

const FirstTitle = styled.h2`
    padding-left: 70%;
    padding-right: 70%;
    margin-bottom: 10px;
    color: black !important;
`;

const ListStyle = styled(ListGroupItem)`
    margin-bottom: 10px;
    line-height: 1.5;

    p {
        margin-bottom: 10px;
    }

    ul {
        padding-left: 20px;
    }

    ul li {
        margin-bottom: 5px;
    }
`;

const SubTd = styled.td`
    font-size: 12px;
    text-align: center;
`;

const Educations: React.FC = () => {
    return (
        <ListContainer>
            <FirstTitle>Educations</FirstTitle>
            <ListStyle>
                <ListItem variant="secondary">
                    <StyledTable striped bordered hover>
                        <thead>
                        <tr>
                            <th>이름</th>
                            <th>비고</th>
                            <th>기간</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <SubTd>소프트웨어 백엔드 엔지니어링 부트캠프</SubTd>
                            <SubTd>
                                <ul>코드스테이츠</ul>
                                <li>Java를 활용한 MVC 패턴과 ORM인 JPA & Hibernate를 이용한 Restful API 구축을 메인으로 학습</li>
                            </SubTd>
                            <SubTd>2022.08 ~ 2023.02</SubTd>
                        </tr>

                        <tr>
                            <SubTd>시스템 엔지니어 교육</SubTd>
                            <SubTd>
                                <ul>한국디지털융합 직업전문학교</ul>
                                <li> 리눅스와 네트워크의 대한 기본적인 서버 지식들, L2,L3 스위치와 서버 구축에 대해 학습하였습니다.</li>
                            </SubTd>
                            <SubTd>2021.03 ~ 2021.09</SubTd>
                        </tr>

                        <tr>
                            <SubTd>덕수고등학교</SubTd>
                            <SubTd>
                                <ul>문과</ul>
                            </SubTd>
                            <SubTd>2010.03 ~ 2013.03</SubTd>
                        </tr>

                        </tbody>
                    </StyledTable>
                </ListItem>
            </ListStyle>

        </ListContainer>
    );
};

export default Educations;
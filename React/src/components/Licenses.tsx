import React from "react";
import styled from "styled-components";
import {ListGroupItem, Table} from "react-bootstrap";
import {ListContainer} from "../styles/container/ListContainer.tsx";
import {ListItem} from "../styles/tabs/ListItem.tsx";
import BaseBar from "../styles/bar/BaseBar.tsx";

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
        width: 15%;
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

const Licenses: React.FC = () => {
    return (
        <ListContainer>
            <FirstTitle>License List</FirstTitle>
            <ListStyle>
                <ListItem variant="secondary">
                    <StyledTable striped bordered hover>
                        <thead>
                        <tr>
                            <th>이름</th>
                            <th>발급 기관</th>
                            <th>취득일</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <SubTd>리눅스 마스터 1급</SubTd>
                            <SubTd>(사)한국정보통신진흥협회</SubTd>
                            <SubTd>2022.06</SubTd>
                        </tr>

                        <tr>
                            <SubTd>CKA (Certified Kubernetes Administrator)</SubTd>
                            <SubTd>Cloud Native Computing Foundation</SubTd>
                            <SubTd>2022.02</SubTd>
                        </tr>

                        <tr>
                            <SubTd>정보처리기능사</SubTd>
                            <SubTd>한국산업인력공단</SubTd>
                            <SubTd>2021.10</SubTd>
                        </tr>

                        <tr>
                            <SubTd>정보기기운용기능사</SubTd>
                            <SubTd>한국산업인력공단</SubTd>
                            <SubTd>2021.09</SubTd>
                        </tr>

                        <tr>
                            <SubTd>리눅스 마스터 2급</SubTd>
                            <SubTd>(사)한국정보통신진흥협회</SubTd>
                            <SubTd>2021.07</SubTd>
                        </tr>

                        <tr>
                            <SubTd>네트워크관리사</SubTd>
                            <SubTd>한국정보통신자격협회</SubTd>
                            <SubTd>2021.06</SubTd>
                        </tr>

                        </tbody>
                    </StyledTable>
                </ListItem>
            </ListStyle>

        </ListContainer>
    );
};

export default Licenses;
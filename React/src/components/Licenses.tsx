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
        width: 5%;
    }

    td:nth-child(2) {
        width: 25%;
    }

    td:nth-child(3) {
        width: 10%;
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

const SubTitle = styled.div`
    color: #FCFFEE;
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
                            <th>취득일</th>
                            <th>발급 기관</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>리눅스 마스터 1급</td>
                            <SubTd>2022.06</SubTd>
                            <SubTd>(사)한국정보통신진흥협회</SubTd>
                        </tr>

                        <tr>
                            <td>CKA (Certified Kubernetes Administrator)</td>
                            <SubTd>2022.02</SubTd>
                            <SubTd>CNCF (Cloud Native Computing Foundation)</SubTd>
                        </tr>

                        <tr>
                            <td>리눅스 마스터 1급</td>
                            <SubTd>2022.06</SubTd>
                            <SubTd>(사)한국정보통신진흥협회</SubTd>
                        </tr>

                        <tr>
                            <td>리눅스 마스터 1급</td>
                            <SubTd>2022.06</SubTd>
                            <SubTd>(사)한국정보통신진흥협회</SubTd>
                        </tr>

                        <tr>
                            <td>리눅스 마스터 1급</td>
                            <SubTd>2022.06</SubTd>
                            <SubTd>(사)한국정보통신진흥협회</SubTd>
                        </tr>

                        <tr>
                            <td>리눅스 마스터 1급</td>
                            <SubTd>2022.06</SubTd>
                            <SubTd>(사)한국정보통신진흥협회</SubTd>
                        </tr>

                        </tbody>
                    </StyledTable>
                </ListItem>
            </ListStyle>

        </ListContainer>
    );
};

export default Licenses;
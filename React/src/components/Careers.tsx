import React from "react";
import styled from "styled-components";
import {ListContainer} from "../styles/container/ListContainer.ts";
import {ListItem} from "../styles/tabs/ListItem.ts";
import BaseBar from "./BaseBar.tsx";
import {ListGroupItem, Table} from "react-bootstrap";

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

const SubTd = styled.td`
    font-size: 12px;
    text-align: center;
`;

const SubTitle = styled.div`
    color: #FCFFEE;
    color: black !important;
`;

const Careers: React.FC = () => {
    return (
        <ListContainer>
            <FirstTitle>다인스(주)</FirstTitle>
            <SubTitle>2023.08.01 ~ 재직중</SubTitle>
            <SubTitle>플랫폼 개발팀 / 주임연구원</SubTitle>
            <ListStyle>
                <ListItem variant="secondary">
                    <StyledTable striped bordered hover>
                        <thead>
                        <tr>
                            <th>기여도</th>
                            <th>수행 목록</th>
                            <th>사용 기술</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td><BaseBar num={20}/></td>
                            <SubTd>
                                <ul>다인스 데이터 뷰어 플랫폼 (GIS 기반 RTSP 영상 분석 및 데이터 뷰어)</ul>
                                <li>RabbitMQ Channel을 이용한 스레드별 Queue Event Consume</li>
                                <li>FFmpeg을 이용해 RTSP IP Cam Stream을 변환해 브라우저에 HLS로 분석영상 Streaming</li>
                                <li>RabbitMQ Publisher를 만들어 부하테스트 용도의 시뮬레이터 개발</li>
                                <li>Server Setting Shell Script 작성 (Ubuntu 22.04)</li>
                                <li>Redis를 이용한 시간대별 데이터 통계 처리</li>
                                <li>DB 스키마, 초기 데이터 SQL 작성, 테이블 파티셔닝</li>
                            </SubTd>
                            <SubTd>
                                <li>Spring Data JPA</li>
                                <li>Spring Data Redis</li>
                                <li>QueryDSL</li>
                                <li>Spring WebFlux</li>
                                <li>Spring ehCache</li>
                                <li>Spring AMQP</li>
                                <li>Maria DB</li>
                                <li>Spring WebSocket</li>
                                <li>Task Executor</li>
                                <li>React / Next</li>
                            </SubTd>
                        </tr>

                        <tr>
                            <td><BaseBar num={100}/></td>
                            <SubTd>
                                <ul>재실 인원 추정 시스템</ul>
                                <li>특정 공간으로 들어가는 사람을 AI 엔진으로 감지하여 재실 인원 추정값 계산</li>
                                <li>Consume한 이벤트 데이터를 프론트엔드와 웹소켓 통신을 통해 재실 인원 모니터링</li>
                            </SubTd>
                            <SubTd>
                                <li>Spring Data JPA</li>
                                <li>H2 DB Imbedded Mode</li>
                                <li>Spring WebSocket</li>
                                <li>JavaScript</li>
                            </SubTd>
                        </tr>

                        <tr>
                            <td><BaseBar num={100}/></td>
                            <SubTd>
                                <ul>지능형 CCTV 활용 도시 안전 데이터 분석 시스템</ul>
                                <li>사거리, 자전거도로 등 특정 구역의 방향별 & 인원/차량 종류별 이용 수 카운팅 및 통계 처리</li>
                            </SubTd>
                            <SubTd>
                                <li>Spring Data JPA</li>
                                <li>Spring WebFlux</li>
                                <li>Spring AMQP (RabbitMQ)</li>
                            </SubTd>
                        </tr>

                        <tr>
                            <td><BaseBar num={100}/></td>
                            <SubTd>
                                <ul>대기열 점유 모니터링 시스템</ul>
                                <li>특정 대기열의 특정 공간의 영역별 인원 수 점유율 추정치 계산 및 모니터링 시스템 개발</li>
                            </SubTd>
                            <SubTd>
                                <li>Spring Data JPA</li>
                                <li>Spring WebFlux</li>
                                <li>Spring AMQP (RabbitMQ)</li>
                            </SubTd>
                        </tr>
                        </tbody>
                    </StyledTable>
                </ListItem>
            </ListStyle>

            <h2 style={{color: "black"}}>고은정보기술(주)</h2>
            <SubTitle>2021.10 - 2022.07</SubTitle>
            <SubTitle>기술지원팀 / 주임 (시스템 엔지니어)</SubTitle>
            <ListStyle>
                <ListItem variant="secondary">
                    <StyledTable>
                        <thead>
                        <tr>
                            <th>주요 업무</th>
                            <th>작업 목록</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <SubTd>
                                <p>HP & DELL Server 구축/마운트/유지보수</p>
                            </SubTd>
                            <SubTd>
                                <li>서버 간 데이터 이전 작업 (rsync 이용)</li>
                                <li>Fortinet 방화벽 마운트 및 보안 설정</li>
                                <li>Docker Container Lifecycle 관리 및 모니터링</li>
                                <li>Docker Private Container Registry 구축</li>
                            </SubTd>
                        </tr>
                        </tbody>
                    </StyledTable>
                </ListItem>
            </ListStyle>
        </ListContainer>
    );
};

export default Careers;
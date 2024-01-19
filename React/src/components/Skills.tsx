import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import styled from "styled-components";
import {ListContainer} from "../styles/container/ListContainer.tsx";
import {ListItem} from "../styles/tabs/ListItem.tsx";

const FirstH2 = styled.h2`
    padding-left: 70%;
    padding-right: 70%;
    margin-bottom: 10px;
`;

const SkillList: React.FC = () => {
    return (
        <ListContainer>
            <FirstH2>Languages</FirstH2>
            <ListGroup>
                    <ListItem variant="secondary">
                        <strong>Java</strong>
                        <p>부트캠프에서 첫 프로그래밍 언어로 학습하였습니다. 객체 지향적인 코드 작성을 위해 지속적인 학습중입니다.</p>
                    </ListItem>

                    <ListItem variant="secondary">
                        <strong>Kotlin</strong>
                        <p>Cross Platform App의 백엔드 개발을 위해 사용했던 언어입니다.</p>
                    </ListItem>

                    <ListItem variant="secondary">
                        <strong>JavaScript</strong>
                        <p>간단한 웹페이지의 동적인 기능을 위해 사용중입니다.</p>
                    </ListItem>

                    <ListItem variant="secondary">
                        <strong>TypeScript</strong>
                        <p>React를 이용한 SPA 기반의 웹 프론트엔드 개발을 위해 사용중입니다.</p>
                    </ListItem>
            </ListGroup>

            <h2>Stacks</h2>
            <ListGroup>
                <ListItem variant="secondary">
                    <strong>Spring Boot</strong>
                    <p>JPA & Hibernate를 이용한 백엔드 개발을 위해 사용 중 입니다.</p>
                    <p>Spring Data JPA, Spring Data Redis, WebSocket, Spring AMQP, Spring WebClient, QueryDSL 등</p>
                </ListItem>

                <ListItem variant="secondary">
                    <strong>React</strong>
                    <p>CSR / SPA 방식의 프론트엔드 개발을 위해 TypeScript 언어와 함께 사용 중 입니다.</p>
                </ListItem>

                <ListItem variant="secondary">
                    <strong>RabbitMQ</strong>
                    <p>Event 기반 어플리케이션의 Message Broker로 RabbitMQ를 사용 중 입니다.</p>
                    <p>Quorum Queue의 Routing Key 방식을 이용한 Publish / Subscribe Pattern을 주로 사용합니다.</p>
                </ListItem>

                <ListItem variant="secondary">
                    <strong>Gstreamer</strong>
                    <p>Gstreamer Pipeline의 Video Bitrate, Codec, Filter, Format, Sink 설정 등 세부 파라미터 조정을 통한 Streaming Pipeline 설정 경험이 있습니다.</p>
                </ListItem>

                <ListItem variant="secondary">
                    <strong>RTSP & FFmpeg & HLS</strong>
                    <p>브라우저에서 지원하지 않는 RTSP 프로토콜 실시간 영상을 FFmpeg을 이용해 HLS로 변환하여 스트리밍 하였습니다.</p>
                </ListItem>

                <ListItem variant="secondary">
                    <strong>WebSocket</strong>
                    <p>대규모 데이터 트래픽을 발생시키는 AI 엔진의 Event Data를 Polling 방식이 아닌 WebSocket을 통해 Subscribe 하는 방식으로 사용합니다.</p>
                    <p>그 외 프론트엔드 단의 실시간 데이터 변화를 보여주기 위해 웹소켓을 사용 중 입니다.</p>
                </ListItem>

                <ListItem variant="secondary">
                    <strong>MariaDB</strong>
                    <p>기본적인 RDB로 MariaDB를 사용 하였습니다.</p>
                    <p>QueryDSL을 이용한 DB 조작 및 Native Query 작성이 가능합니다.</p>
                </ListItem>

                <ListItem variant="secondary">
                    <strong>Redis</strong>
                    <p>휘발성 데이터의 임시 저장과 차트 통계를 위한 빠른 I/O를 위해 사용중인 NoSQL DB입니다.</p>
                    <p>RabbitMQ의 대용으로 Redis Channel의 Publish & Subscribe 패턴을 이용한 데이터 핸들링 경험이 있습니다.</p>
                </ListItem>

                <ListItem variant="secondary">
                    <strong>Server & Serverless</strong>
                    <p>Debian & RedHat 기반의 Linux / Windows Server 세팅 경험이 있습니다.</p>
                    <p>Public Cloud인 AWS를 이용한 Serverless 아키텍처의 구성과 서버 세팅 경험이 있습니다. (Shell Script 작성, 네트워크, 보안 설정 등)</p>
                </ListItem>

                <ListItem variant="secondary">
                    <strong>Docker & Kubernetes</strong>
                    <p>컨테이너 기반 환경에 익숙하며 Docker / Docker Compose를 주로 사용하고 Private Container Registry를 이용해 이미지를 관리합니다.</p>
                    <p>Docker Network 구성 & Volumn Mount 등 기본적인 Docker의 사용법을 숙지하고 있습니다.</p>
                    <p>Kubernetes Object들을 이용해 Pod의 HA 구성, Service를 통한 Expose 등 기본적인 사용법을 숙지하고 있습니다.</p>
                </ListItem>

                <ListItem variant="secondary">
                    <strong>CI & CD</strong>
                    <p>Jenkins Declarative Pipeline & Nginx & Docker를 이용한 트래픽 로드밸런싱과 Blue & Green 무중단 배포를 구현해 본 경험이
                        있습니다.</p>
                    <p>Github Actions를 통한 간단한 CI & CD를 구현해 본 경험이 있습니다.</p>
                    <p>AWS Code Deploy, Pipeline을 이용한 CI & CD를 구현해 본 경험이 있습니다.</p>
                </ListItem>
            </ListGroup>

        </ListContainer>
    );
};

export default SkillList;
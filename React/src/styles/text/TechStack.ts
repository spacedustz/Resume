export const TechStack = {
    content: '## ⚒️ Frameworks & Libraries\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### Spring Boot\n' +
        '\n' +
        '- `Java & Kotlin` 기반의 JPA & Hibernate를 이용한 백엔드 개발을 위해 사용 중 입니다.\n' +
        '- Spring Data JPA, Spring Data Redis, WebSocket, Spring AMQP, Spring WebClient, QueryDSL 등\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### React\n' +
        '\n' +
        '- CSR & SPA 방식의 프론트엔드 개발을 위해 `TypeScript` 언어와 함께 사용 중 입니다.\n' +
        '- 기본적인 웹/모바일 반응형(media-query) 적용 및 레이아웃 설계가 가능합니다.\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### RabbitMQ\n' +
        '\n' +
        '- Event 기반 어플리케이션의 Message Broker로 RabbitMQ를 사용 중 입니다.\n' +
        '- Quorum Queue의 Routing Key 방식을 이용한 Publish / Subscribe Pattern을 주로 사용합니다.\n' +
        '- 각 스레드별 Channel Basic Consume 방식, Queue를 직접 Subscribe 하는 방식들을 주로 사용합니다.\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### Gstreamer\n' +
        '\n' +
        '- Gstreamer Pipeline의 Video Bitrate, Codec, Filter, Format, Sink 설정 등 세부 파라미터 조정을 통한 Streaming Pipeline 설정 경험이 있습니다.\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### RTSP & FFmpeg & HLS\n' +
        '\n' +
        '- 브라우저에서 지원하지 않는 RTSP 프로토콜 실시간 영상을 FFmpeg을 이용해 HLS로 변환하여 브라우저로 스트리밍 하였습니다.\n' +
        '- .ts(Segment) & .m3u8(Playlist) File에 대한 HLS List Size 등등 많은 옵션을 사용하여 Video 변환 Latency & Segment 파일 크기 등 환경에 맞는 Video를 변환 및 튜닝 하였습니다.\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### WebSocket\n' +
        '\n' +
        '- Message Queue로부터 Consume 한 데이터를 가공해 각각의 플랫폼에 웹소켓 채널을 분리하여 전달할 용도로 사용 하였습니다.\n' +
        '- HTTP 요청이 많은 API에 대한 TCP Connection Overhead를 줄이기 위해 WebSocket을 사용 중입니다.\n' +
        '- 그 외 프론트엔드 단의 실시간 데이터 변화를 보여주기 위해 웹소켓을 사용 중 입니다.\n' +
        '\n' +
        '---\n' +
        '\n' +
        '## ⚒️ Databases\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### MariaDB\n' +
        '\n' +
        '- 기본적인 RDB로 MariaDB를 사용 하였습니다.\n' +
        '- QueryDSL을 이용한 DB 조작 및 Native Query 작성 & DB Backup/Restore 작업이 가능합니다.\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### Redis\n' +
        '- 휘발성 데이터의 임시 저장과 차트 통계를 위한 빠른 I/O를 위해 사용중인 NoSQL DB입니다.\n' +
        '- Message Broker의 용도로 Redis Channel의 Publish & Subscribe 패턴을 이용한 데이터 핸들링 경험이 있습니다.\n' +
        '\n' +
        '---\n' +
        '\n' +
        '## ⚒️ DevOps\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### Server & Serverless\n' +
        '\n' +
        '- Debian & RedHat 기반의 Linux / Windows Server 세팅 경험이 있습니다.\n' +
        '- Public Cloud인 AWS를 이용한 Serverless 아키텍처의 구성과 서버 세팅 경험이 있습니다. (Shell Script 작성, 네트워크, 보안 설정 등)\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### Docker & Kubernetes\n' +
        '\n' +
        '- 컨테이너 기반 환경에 익숙하며 Docker / Docker Compose를 주로 사용하고 Private Container Registry를 이용해 이미지를 관리합니다.\n' +
        '- Docker Network 구성 & Volumn Mount 등 기본적인 Docker의 사용법을 숙지하고 있습니다.\n' +
        '- Kubernetes Object들을 이용해 Pod의 HA 구성, Service를 통한 Expose 등 기본적인 사용법을 숙지하고 있습니다.\n' +
        '\n' +
        '<br>\n' +
        '\n' +
        '### CI & CD\n' +
        '\n' +
        '- 실무 백엔드 프로젝트를 Blue & Green 무중단 방식으로 배포 하였습니다. (Jenkins Declarative Pipeline & Nginx & Docker Container를 이용한 트래픽 로드밸런싱 및 HA 구성)\n' +
        '- Github Actions를 통한 간단한 CI & CD를 구현해 본 경험이 있습니다.\n' +
        '- AWS Code Deploy, Pipeline을 이용한 CI & CD를 구현해 본 경험이 있습니다.\n'
}
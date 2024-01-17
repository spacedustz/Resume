import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";

const IntroContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    color: #333;

    div {
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 20px;
        line-height: 1.5;
        word-wrap: normal;
        background-color: #f5f5f5;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
`;

const Introduce: React.FC = () => {
    return (
        <IntroContainer>
            <div>
                <strong>안녕하세요, 신건우입니다.</strong>
            </div>

            <div>
                저는 전혀 다른 직종에서 일을 하다가 우연히 국비 지원 교육을 통해<br />
                2021년 3월에 IT를 접하게 되었고, 국비 지원 교육(리눅스, 네트워크 교육)을 받고 시스템 엔지니어로 취업하였습니다.
            </div>

            <div>
                시스템 엔지니어 관련 만들어진 서비스의 유지 보수 업무를 하던 중 개발자로 방향 전환을 하게 된 계기는,<br />
                재직 당시 협력 업체의 Devops팀 업무 범위가 단순히 운영이 아닌<br />
                개발과 배포 등 전반적인 IT 업무를 하는 전문적인 모습을 보며 동경하게 되었으며,<br />
                직접 기능을 만드는 개발 업무를 배워보고자 퇴사 후 바로 개발 교육을 받고 무사히 수료를 하였습니다.
            </div>

            <div>
                2022년 8월 처음 개발을 배울때 논리적 & 알고리즘적인 사고에 익숙하지 않아 학습에 많은 어려움이 있었지만,<br />
                점점 코드에 익숙해지고 배우면서 어려운 에러를 핸들링 하며 해결을 했을 때 느꼈던 엄청난 쾌감과,<br />
                진심으로 즐기고 있는 제 모습을 주변 사람들이 알려주었습니다.
            </div>

            <div>
                그 후, 기능 개발이 제 적성에 굉장히 잘 맞는다는 것을 느꼈으며,<br />
                어렵고 힘들어도 즐기며 일을 할 수 있는 개발자의 길을 택하였습니다.
                빠른 행동만큼 열심히 하는 것과 한번 문 것은 잘 놓지않는 끈기가 있는 성격이며,<br />
                부트캠프 수료 이후에도 지속적으로 성장중입니다.

            </div>

            <div>
                짧은 기간에 얼만큼 성장 할 수 있는지는 그 사람이 어떤 사람 인지에 따라,<br />
                엄청난 성장의 차이가 있다고 생각하며 이 부분 만큼에 있어서 노력했다고 자신합니다.<br />
                그에 대한 근거로,<br />
                6개월의 짧은 교육 기간 동안 꾸준히 배운 것을 기록한 기술 블로그 URL을 프로필 사진 옆 링크 버튼으로 첨부 드립니다.
            </div>

            <div>
                그리고, 저는 오버 커뮤니케이션을 지향합니다.<br />
                이번 부트캠프 프로젝트에서는 팀원들과 많은 이야기를 나누지 못했고,<br />
                이는 곧 프로젝트의 결과물과 직결이 되었습니다.
            </div>

            <div>
                보다 많은 커뮤니케이션을 통해 서로에게 피드백을 주고 받고,<br />
                코드 리팩터링 등의 과정을 거쳐야 원활한 진행에 도움이 되며,<br />
                결과적으로 개개인의 성장과 더불어 프로젝트의 결과물도 좋을 것이라는 생각이 있습니다.
            </div>
        </IntroContainer>
    )
}

export default Introduce;
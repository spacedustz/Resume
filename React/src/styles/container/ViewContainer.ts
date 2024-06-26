import styled from "styled-components";

export const ViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5% 5% 5% 5%;
    //background-color: rgb(200, 200, 200);
    //background-color: rgba(250, 250, 250, 0.8);
    //color: #212529;
    background-color: rgba(27, 29, 30, 0.5);
    color: rgb(209, 205, 199);
    font-size: 15px;
    word-break: break-word;
    vertical-align: baseline;
    line-height: 2;
    flex-wrap: wrap;
    width: 100%;
    overflow: auto;
    min-height: 100vh;

    h2 {
        padding-bottom: 3px;
        font-weight: bold;
        font-size: 25px;
    }

    h3 {
        font-weight: bold;
        font-size: 20px;
    }

    @media (max-width: 768px) {
        padding-top: 5%;
        flex-wrap: wrap;
        word-wrap: break-word;
        font-size: 9px;

        h2 {
            padding-bottom: 3px;
            font-weight: bold;
            font-size: 16px;
        }

        h3 {
            padding-bottom: 5px;
            font-weight: bold;
            font-size: 13px;
        }
    }
`;
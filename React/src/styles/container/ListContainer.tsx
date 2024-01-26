import styled from "styled-components";
import {Container} from "react-bootstrap";

export const ListContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin-top: 50px;
        padding-left: 10%;
        padding-right: 10%;
        color: khaki;
    }
`;

// export const ScrollStyledContainer = styled(ListContainer)`
//     max-height: 100vh;
//     max-width: 100vw;
//     overflow-y: auto;
//
//     &::-webkit-scrollbar {
//         width: 8px;
//         height: 8px;
//         border-radius: 6px;
//         background: rgba(255, 255, 255, 0.4);
//     }
//
//     &::-webkit-scrollbar-track {
//         background: rgba(33, 122, 244, .1);
//         border-radius: 10px;
//     }
//
//     &::-webkit-scrollbar-thumb {
//         height: 30%;
//         background: rgba(0, 0, 0, 0.3);
//         border-radius: 6px;
//         transition: background 0.3s ease-in-out;
//     }
//
//     &::-webkit-scrollbar-thumb:hover {
//         background: #888;
//     }
// `;
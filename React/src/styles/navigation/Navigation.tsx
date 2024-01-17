import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import styled from "styled-components";

const NavStyle = styled(Navbar)`
    a {
        margin: 2px;
        
        &:hover {
            background-color: rgba(250, 250, 210, 0.5);
            color: rgba(250, 250, 210, 0.5);
            transform: scale(1.12);
            transition: color 0.5s;
        }
    }
`;

const Navigation: React.FC = () => {
    return (
        <>
            <NavStyle bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>신건우 이력서</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/spacedustz">Github</Nav.Link>
                        <Nav.Link href="https://iizz.tistory.com">Tech Blog</Nav.Link>
                    </Nav>
                </Container>
            </NavStyle>
        </>
    );
}

export default Navigation;
import React from "react";
import Nav from "react-bootstrap/Nav";
import {ImageStyle, NavStyle} from "../styles/navigation/Navigation.ts";
import {useNavigate} from "react-router-dom";

const Navigation: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <NavStyle bg="dark" data-bs-theme="dark">
                    <Nav className="me-auto">
                        <Nav.Link onClick={handleClick}>
                            <ImageStyle src="../public/assets/profile/home.png" alt="home" />
                            Home
                        </Nav.Link>

                        <Nav.Link href="https://github.com/spacedustz" target="_blank">
                            <ImageStyle src="../public/assets/profile/github.svg" alt="github" />
                            Github</Nav.Link>

                        <Nav.Link href="https://iizz.tistory.com" target="_blank">
                            <ImageStyle src="../public/assets/profile/blog.svg" alt="blog" />
                            Blog</Nav.Link>
                    </Nav>
            </NavStyle>
        </>
    );
}

export default Navigation;
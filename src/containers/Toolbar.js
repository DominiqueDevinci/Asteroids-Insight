import React from 'react'
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Nav, Navbar, NavItem} from 'react-bootstrap'

export const Toolbar = () => {
    return (
     <Row>
        <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"> Asteroid Insight </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/asteroids/browse" ><NavItem> Browse </NavItem></LinkContainer>
                        <LinkContainer to="/asteroids/closest" ><NavItem> Closest asteroids </NavItem></LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/signin" ><NavItem> Connection </NavItem></LinkContainer>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Row>
    );
};

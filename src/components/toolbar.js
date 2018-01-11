import React from 'react';
import { Grid, Row, Col, Nav, Navbar, NavItem } from 'react-bootstrap';

const Toolbar = () => {
    return (
        <Grid fluid id="main-navbar">
            <Row>

                    <Navbar>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link  to="/"> Asteroid Insight </a>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem href="/Observatories"> Browse </NavItem>
                                <NavItem href="/Asteroids"> Closest asteroids </NavItem>
                            </Nav>
                            <Nav pullRight>
                                <NavItem href="/Account"> My Account </NavItem>
                            </Nav>
                        </Navbar.Collapse>

                    </Navbar>


            </Row>
        </Grid>
    );
};

export default Toolbar;

import React, { useState } from 'react';
import styled from 'styled-components'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Logo = styled.img`
    width: 150px;
`

const NavItemStyle = {
    color: '#005CBF',
    fontSize: '13px',
    padding: '17px 10.5px'
}

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        
            <Navbar color="white" light expand="md">
                <div className="container">
                    <NavbarBrand href="/">
                        <Logo src="../static/img/logo.jpg" />
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/" style={NavItemStyle}>
                                    ACCUEIL
                                </NavLink>    
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/" style={NavItemStyle}>
                                    CONFÉRENCES
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/" style={NavItemStyle}>
                                    CONFÉRENCIERS
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/" style={NavItemStyle}>
                                    ANIMATION
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/" style={NavItemStyle}>
                                    BOUTIQUE
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/" style={NavItemStyle}>
                                    VIDÉOS
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/" style={NavItemStyle}>
                                    CONTACT
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
    );
}

export default Example;
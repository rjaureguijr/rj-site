import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { NavLink } from "react-router-dom";

export class NavBar extends React.Component {
    render () {
        return (
            <div>
                <Navbar collapseOnSelect bg="light" expand="lg">
                    <Navbar.Brand> <NavLink className="nav-link" exact to="/">Rudy Jauregui</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                            <NavLink className="nav-link" to="/topics">Topics</NavLink>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
      );
    }
}
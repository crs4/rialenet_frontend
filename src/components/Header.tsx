import React from "react";
import {
    Container, Button, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import { Link } from "react-router-dom";

export const Header = ({ className, section, showMenu = false }: any) => {

    const _section = section != undefined ? section : "Forum"
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const isAuthenticated = true;
    const userAttributes = { "name": "Rana", "surname": "Volante" };

    return (
        <Navbar className={className} color="primary" light expand="md">
            <NavbarBrand className="text-white font-weight-bold" href="/">RIALE - {_section}</NavbarBrand>
            {showMenu && (<>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    {(
                        <Nav className="mr-auto" navbar>
                        </Nav>
                    )}
                    <Nav navbar>
                        <>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="text-white" nav caret>{userAttributes.name}{` `}{userAttributes.surname}</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink className={"text-primary"}
                                            style={{ color: 'white', textDecoration: 'none' }}
                                            tag={Link} to={"/logout"}>
                                            Logout
                                        </NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </>
                    </Nav>
                </Collapse>
            </>)}
        </Navbar>

    )
}

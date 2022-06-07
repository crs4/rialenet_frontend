import React from "react";
import {
    Container, Button, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,
    NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap'
import { useDispatch, useSelector } from "react-redux";
import { actions as UserTasksActions, selectors as UserTasksSelectors } from '../store/slices/userTasks'

export const Header = ({ className, section, showMenu = false }: any) => {

    const _section = section != undefined ? section : "Forum"
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const dispatch = useDispatch();
    const userProfile = useSelector(UserTasksSelectors.getUserProfile);
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
                        { userProfile && 
                        <>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="text-white" nav caret>{userProfile.name.first}{` `}{userProfile.name.last}</DropdownToggle>
                                <DropdownMenu right>
                                <DropdownItem onClick={() => {
                                            dispatch(UserTasksActions.willLogout(""));
                                        }}>Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </>
                        }
                    </Nav>
                </Collapse>
            </>)}
        </Navbar>

    )
}

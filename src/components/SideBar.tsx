import { NavItem, NavLink, Nav } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faChartPie,
    faBriefcase,
    faTimes,
    faQuestion,
    faImage,
    faBook,
    faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const SideBar = ({ active }: any) => {
    return (
        <div style={{
            border: '0px solid #000',
            width: '240px',
            position: 'absolute',
            backgroundColor: '#f1f1f1',
            bottom: 0,
            top: 56
        }}>

            <Nav vertical className="list-unstyled pb-3">
                <NavItem active={active === "dashboard" ? true : false} className="mb-1">
                    <NavLink className={active === "dashboard" ? "text-primary" : "text-secondary"}
                        style={{ textDecoration: 'none', fontWeight: 'bolder' }} tag={Link}
                        to={"/dashboard"}>
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Dashboard
                    </NavLink>
                </NavItem>
            </Nav>
        </div>)

}
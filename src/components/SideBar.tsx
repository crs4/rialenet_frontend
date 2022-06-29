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
import { useTranslation } from 'react-i18next';
import { Role } from "../constants";

export const SideBar = ({ active, role }: any) => {
  
    const { t, i18n } = useTranslation('frontend', { useSuspense: false });
    console.log("Role in sidebar ->", role, Role.teacher, (role==Role.teacher || role==Role.admin));
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
                {/* 
                <NavItem active={active === "public_area" ? true : false} className="mb-1">
                    <NavLink className={active === "public_area" ? "text-primary" : "text-secondary"}
                        style={{ textDecoration: 'none', fontWeight: 'bolder' }} tag={Link}
                        to={"/forum"}>
                        <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> {t("public_area")}
                    </NavLink>
                </NavItem>
                */}
                {
                    (role==Role.student || role==Role.admin) &&
                    (
                        <NavItem active={active === "student_dashboard" ? true : false} className="mb-1">
                            <NavLink className={active === "student_dashboard" ? "text-primary" : "text-secondary"}
                                style={{ textDecoration: 'none', fontWeight: 'bolder' }} tag={Link}
                                to={"/student_dashboard"}>
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> {t("student_area")}
                            </NavLink>
                        </NavItem>

                    )
                }
                {
                    (role==Role.teacher || role==Role.admin) &&
                    (
                        <NavItem active={active === "teacher_dashboard" ? true : false} className="mb-1">
                            <NavLink className={active === "teacher_dashboard" ? "text-primary" : "text-secondary"}
                                style={{ textDecoration: 'none', fontWeight: 'bolder' }} tag={Link}
                                to={"/teacher_dashboard"}>
                                <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> {t("teacher_area")}
                            </NavLink>
                        </NavItem>

                    )
                }

            </Nav>
        </div>)

}
import React, {useState} from 'react';
import {FaBars, FaGithub, FaLinkedin} from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";
import {SidebarData} from "./sidebarData";
import './navbar.css';
import {IconContext} from "react-icons";


const Navbar = (props) => {
    const [sidebar, setSidebar] = useState(!props.initialSidebar)

    const location = useLocation();
    const showSidebar = () => {
            setSidebar(!sidebar);
            props.expandHandler();
    }

    const clickLink = (e) => {
        if (window.innerWidth <= 600) {
            showSidebar();
        }
        e.stopPropagation();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#123856'}}>
                <div className={"navbar"}>
                    <Link to={"#"} className={"menu-bars"} onClick={showSidebar}>
                        <FaBars/>
                    </Link>
                    <Link to={"/"} className={sidebar?"menu-logo":"menu-logo logo-go-left"}>
                        <img src={"/M-logo.png"} className={"menu-m-logo"} alt={"My logo, M"}/>
                        <img src={"/Christensen-logo.png"} alt={"My logo, M"} className={"menu-ch-logo"}/>
                    </Link>
                    <div className={"contact-links"}>
                        <a href={"https://github.com/martinchristensen"} target={"_blank"} className={"contact-link"}>
                            <FaGithub/>
                        </a>
                        <a href={"https://www.linkedin.com/in/mc1995/"} target={"_blank"} className={"contact-link"}>
                            <FaLinkedin/>
                        </a>
                    </div>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className={'nav-menu-items'}>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.path === location.pathname ? item.cName + " active" : item.cName}>
                                    <Link to={item.path} onClick={e => clickLink(e)}>
                                        {item.icon}
                                        <span className={"nav-span"}>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
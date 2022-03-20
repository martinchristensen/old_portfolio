import React, {useState} from 'react';
import {FaBars} from "react-icons/fa";
import {Link} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";
import {SidebarData} from "./sidebarData";
import './navbar.css';
import {IconContext} from "react-icons";


const Navbar = () => {
    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <div className={"navbar"}>
                    <Link to={"#"} className={"menu-bars"} onClick={showSidebar}>
                        <FaBars/>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className={'nav-menu-items'}>
                        <li className={"navbar-toggle"}>
                            <Link to={"#"} className={"menu-bars"} onClick={showSidebar}>
                                <AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
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
import {AiFillHome} from "react-icons/ai";
import {RiNewspaperFill} from "react-icons/ri";
import {VscGraphLine} from "react-icons/vsc";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Resume',
        path: '/resume',
        icon: <RiNewspaperFill />,
        cName: 'nav-text'
    },
    {
        title: 'Numerical Integration',
        path: '/integration',
        icon: <VscGraphLine />,
        cName: 'nav-text'
    }
]
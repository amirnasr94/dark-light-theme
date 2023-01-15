import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from "prop-types";

const SubMenu = ({title,icon,link,subMenu,onClick}) => {
    const[expand,setExpand] = useState(false);
    
    const handleExpandSubMenu = () => {
        setExpand(!expand);
    }
    return ( 
        <>
            <li className='nav-item' onClick={e => onClick()}>
                <NavLink className="link" to={link} onClick={e => handleExpandSubMenu()}>
                    <div><img src={icon} alt=''/></div>
                    <div className='d-flex gap-1 align-items-baseline'><span>{title}</span>{subMenu && subMenu.length > 0 ? <i className={expand ? "fa fa-angle-down" : "fa fa-angle-right"}></i>:null}</div>
                </NavLink>
                    {subMenu && subMenu.length > 0 ?
                        <ul className={expand ? "sub-navbar submenu-active" : "sub-navbar"}>
                            {subMenu.map((x,index) => (
                                <li key={index} className='sub-nav-item'>
                                    <NavLink to={x.to}>{x.name}</NavLink>
                                </li>
                            ))}
                        </ul> 
                    :null}
            </li>
        </>

     );
}

SubMenu.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    link: PropTypes.string,
    subMenu: PropTypes.array,
    onClick: PropTypes.func
}
 
export default SubMenu;
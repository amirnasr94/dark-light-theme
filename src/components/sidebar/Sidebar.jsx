import React from 'react';
import { Link } from 'react-router-dom'
import SubMenu from './SubMenu';
import PropTypes from 'prop-types'; // ES6

const Sidebar = ({handleShowSidebar,showSidebar}) => {
    console.log(showSidebar);
    const navbar = [
        {title:"Dashboard",icon:"../assets/images/home-icon.png",link:"/dashboard",subMenu:[]},
        {title:"Profile",icon:"../assets/images/profile-setting-icon.png",link:"#",subMenu:[
            {name:"Edit Profile",to:"/dashboard/profile"},
            {name:"Change Password",to:"/dashboard/changepass"},
            {name:"Add User",to:"/dashboard/add-user"}
        ]},
        {title:"Setting",icon:"../assets/images/setting-icon.png",link:"#",subMenu:[
            {name:"All Models",to:"/dashboard/models"},
            {name:"Add Menu",to:"/dashboard/addmenu"},
            {name:"Add Model",to:"/dashboard/addmodel"},
            {name:"Filters",to:"/dashboard/feature"},
        ]},
        {title:"Tickets",icon:"../assets/images/support-icon.png",link:"/dashboard/ticket",subMenu:[]},
        {title:"Reports",icon:"../assets/images/report-icon.png",link:"",subMenu:[]}
    ];
    return ( 
        <div className='sidebar-wrapper'>
            <div className='sidebar-nav'>
                <div className='sidebar-nav-top-section'>
                    <div className='nav-item-avatar'>
                        <img src='../assets/images/avatar.png' width='42px' alt=''/>
                        <span>user-1</span>
                    </div>
                </div>
                <div role='button' className='toggle-menu-btn shadow-sm' onClick={e => handleShowSidebar(null)}>
                    {/* <i className={window.innerWidth > 800 ? (showSidebar ? 'fa fa-bars' : 'fa fa-times') : (showSidebar ? 'fa fa-times' : 'fa fa-bars')} onClick={e => handleShowSidebar(null)}></i> */}
                    <i className={showSidebar ? 'fa fa-angle-right' : 'fa fa-angle-left'
                    }></i>
                </div>
                {/* <div className='devider'></div> */}
                <div className='sidebar-navbar-container'>
                    <ul className='navbar'>
                        {navbar.map((x,index) => (
                            <SubMenu
                            key={index}
                            title={x.title} 
                            icon={x.icon}
                            link={x.link}
                            subMenu={x.subMenu}
                            onClick={() => {
                                if(window.innerWidth > 800){if(showSidebar) handleShowSidebar(false)};
                                // if(showSidebar) handleShowSidebar(false);
                            }}
                            />
                        ))}
                        <div className='devider'></div>
                        <li className='nav-item nav-logout'>
                            <Link to='/logout'>
                                <div><img src='../assets/images/log-out.png' alt=''/></div>
                                <div><span>LogOut</span></div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
Sidebar.propTypes = {
    handleShowSidebar: PropTypes.func,
    showSidebar: PropTypes.bool
}

export default Sidebar;
import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'

const Layout = () => {
  const [showSidebar,setShowSidebar] = useState(false);
  const handleShowSidebar = (x) => {
      if (x !== null) {
          setShowSidebar(x)
      }else{
          setShowSidebar(!showSidebar);
      }
  }
  return (
    <div className='wrapper'>
        <div className='layoat-container'>
            <div className={showSidebar ? "layoat-sidebar sidebar-inactive" : "layoat-sidebar"}>
                <Sidebar showSidebar={showSidebar} handleShowSidebar={handleShowSidebar}/>
            </div>
            <div className={showSidebar ? "layoat-body layoat-body-inactive" : "layoat-body"}>
                <div className='layoat-body-header'>
                    {/* <Header/> */}
                </div>
                <hr className='devider' size="4"/>
                <div className='layoat-body-content'>
                    {/* <Outlet/> */}

                    <div className='layoat-footer'>
                        <img src='../assets/images/rectangle.png' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout
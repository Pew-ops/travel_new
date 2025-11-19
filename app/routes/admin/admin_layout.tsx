import React from 'react'
import { Outlet } from "react-router-dom";   
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MobileSlidebar, NavItems } from 'Components';


const admin_layout = () => {
  return (
    <div className='admin-layout'>
      <MobileSlidebar/>

      <aside className='w-full max-w-[270px] hidden lg:block'>
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems/>
        </SidebarComponent>
      </aside>

      <aside className='children'>
        <Outlet/>
      </aside>
    </div>
  
  )
}

export default admin_layout 
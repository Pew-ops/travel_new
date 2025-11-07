import React from 'react'
import { Outlet } from 'react-router'
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavItems } from 'Components';


const admin_layout = () => {
  return (
    <div className='admin-layout'>
      mobile side bar

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
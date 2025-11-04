import React from 'react'
import { Outlet } from 'react-router'


const admin_layout = () => {
  return (
    <div className='admin-layout'>
      mobile side bar

      <aside className='w-full max-w-[270px] hidden lg:block'>sidebar</aside>

      <aside className='children'>
        <Outlet/>
      </aside>
    </div>
  
  )
}

export default admin_layout
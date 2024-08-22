import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logout from './Logout'
export default function Sidebar() {
  return (
    <div className='scrollable-container border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput/>
      <Conversations/>
      <Logout/>

    </div>

  )
}




import React from 'react'
import { CgLogOut } from 'react-icons/cg'
import useLogout from '../../hooks/useLogout'

export default function Logout() {
  const { loading, logout } = useLogout();
  return (
    <div className='mt-auto'>
      {!loading ? (<CgLogOut className=' w-6 h-6 text-white-400 cursor-pointer' onClick={logout}/>) : (
        <span className='loading loading-spinner'></span>
      )}

    </div>
  )
}



// import React from 'react'
// import { CgLogOut } from 'react-icons/cg'

// export default function Logout() {
//   return (
//     <div className='mt-auto'>
//       <CgLogOut className=' w-6 h-6 text-white-400 cursor-pointer'/>
//     </div>
//   )
// }

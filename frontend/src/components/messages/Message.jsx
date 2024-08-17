import React from 'react'
import {useAuthContext} from '../../context/authContext'
import useConversation from '../../zustand/useConversation';
import {extractTime} from '../../utils/extractTime';
export default function Message({message}) {
  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();
  const formattedTime=extractTime(message.createdAt);
  const fromMe=message.senderId===authUser._id;
  const chatClassName=fromMe ? 'chat-end' : 'chat-start';
  const profilePic=fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor=fromMe ? 'bg-blue-500' : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
        <img src={profilePic} alt="user_avatar" />
        </div>
      </div>

      <div className={`chat-bubble text-white  ${bubbleBgColor}`}>{message.message}</div>
      <div className='chat-footer  text-xs text-white flex gap-1 items-center pb-2'>{formattedTime}</div>

    </div>
  )
}



// import React from 'react'

// export default function Message() {
//   return (
//     <div className='chat chat-end'>
//       <div className='chat-image avatar'>
//         <div className='w-10 rounded-full'>
//         <img src="https://avatar.iran.liara.run/public/boy?username=$deepak" alt="user_avatar" />
//         </div>
//       </div>

//       <div className='chat-bubble text-white bg-blue-500'>How it's going!</div>
//       <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>

//     </div>
//   )
// }

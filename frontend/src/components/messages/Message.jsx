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
  const shakeClass=message.shouldShake ? "shake":"";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
        <img src={profilePic} alt="user_avatar" />
        </div>
      </div>

      <div className={`chat-bubble text-white  ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
      <div className='chat-footer  text-xs text-white flex gap-1 items-center pb-2'>{formattedTime}</div>

    </div>
  )
}


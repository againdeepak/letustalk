import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/authContext';

export default function MessageContainer() {
   const{selectedConversation,setSelectedConversation} =useConversation();

   useEffect(() => {
     
    //cleaning funciton (unmount)
    return ()=>setSelectedConversation(null);
   }, [setSelectedConversation])
   
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? (<NoChatSelected /> ): (
                <>
                    {/* Header */}
                    <div className='bg-slate-600  px-4 py-2 mb-2'>
                        
                        <span className='text-green-400 font-bold'> {selectedConversation.fullname}</span>
                    </div>

                    <Messages  />
                    <MessageInput />
                </>
            )}
        </div>
    )
}


const NoChatSelected = () => {
    const {authUser}=useAuthContext();
    return (
        <div className='flex items-center justify-center w-full h-full no-chat-selected'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 {authUser.fullname} ☀︎</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6lx text-center text-yellow-300' />
            </div>
        </div>
    )
}



import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import { BiHive, BiMessage, BiMessageAltDetail } from 'react-icons/bi';

export default function MessageContainer() {
    const noChatSelected = true;
    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ? (<NoChatSelected /> ): (
                <>
                    {/* Header */}
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span>
                        <span className='text-green-500 font-bold'> John Doe</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    )
}


const NoChatSelected = () => {
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 John Doe ☀︎</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6lx text-center text-yellow-300' />
            </div>
        </div>
    )
}



// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import { TiMessages } from 'react-icons/ti'
// import { BiHive } from 'react-icons/bi';

// export default function MessageContainer() {
//     const noChatSelected = true;
//     return (
//         <div className='md:min-w-[450px] flex flex-col'>
//             {noChatSelected ? (<NoChatSelected /> ): (
//                 <>
//                     {/* Header */}
//                     <div className='bg-slate-500 px-4 py-2 mb-2'>
//                         <span className='label-text'>To:</span>
//                         <span className='text-green-500 font-bold'> John Doe</span>
//                     </div>

//                     <Messages />
//                     <MessageInput />
//                 </>
//             )}
//         </div>
//     )
// }


// const NoChatSelected = () => {
//     return (
//         <div className='flex items-center justify-center w-full h-full'>
//             <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
//                 <p>Welcome 👋 John Doe ☀︎</p>
//                 <p>Select a chat to start messaging</p>
//                 <TiMessages className='text-3x1 w-6 md:text-6x1 text-center' />
//             </div>
//         </div>
//     )
// }
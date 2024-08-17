import React from 'react'
import Conversation from './Conversation'
import { getRandomEmoji } from '../../utils/emjois';
import useGetConversations from '../../hooks/useGetConversation';
export default function Conversations() {
  const {loading,conversations}=useGetConversations();
  console.log(conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {
        conversations.map((conversation,idx)=>(
          <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx===conversations.length-1}
          />
        ))
      }
    </div>
  )
}




// import React from 'react'
// import Conversation from './Conversation'
// export default function Conversations() {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//       <Conversation/>
//       <Conversation/>
      

//     </div>
//   )
// }

import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import toast from 'react-hot-toast';
import useGetConversations from '../../hooks/useGetConversation';
import useConversation from '../../zustand/useConversation';

export default function SearchInput() {
    const [search, setSearch]=useState("");
    const {setSelectedConversation}=useConversation();
    const {conversations}=useGetConversations();
    const handleSubmit=(e)=>{
         e.preventDefault();
         if(!search) return;
         if(search.length < 3){
            return toast.error("Enter at least 3 characters");
         }
         const conversation=conversations.find((c)=>c.fullname.toLowerCase().includes(search.toLowerCase()));

         if(conversation){
            setSelectedConversation(conversation);
            setSearch("");
         }
         else toast.error("No such user found!");
    }
    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input type='text' placeholder='Search' className='input input-bordered rounded-full' 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>

            <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
                <BiSearch className='w-6 h-6 outline-none'/>
            </button>
        </form>
    )
}




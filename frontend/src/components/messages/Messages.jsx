import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import { useAuthContext } from '../../context/AuthContext'

const Messages = () => {

    const {authUser} = useAuthContext()
    const { messages, loading } = useGetMessages()
    // console.log("Chit Chats:", messages)
    // console.log(authUser);

    if (messages === null) {
        return <p className='flex justify-center items-center min-h-[400px]'>No chats with user yet.</p>
    }


    const userMessages = messages.map((message) => {
        return (
            <Message key={message._id} message={message} sender={message.senderId}/>
        )
    })

    return (



        <div className='px-4 flex-1 overflow-auto'>
            {loading ? <p>Loading...</p> : userMessages}
        </div>
    )
}

export default Messages

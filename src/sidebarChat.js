import { Avatar } from '@mui/material'
import React, {useState, useEffect} from 'react'
import './css/sidebar.css'
import {Link} from 'react-router-dom'

const SidebarChat = ({newChat,  topic, id}) => {

    const [random, setRandom] = useState('')

    useEffect(()=> {
        setRandom(Math.floor(Math.random()*5000));
    },[])
    return (
        !newChat ? (
            
            <Link to={`/topic/${id}`} style={{textDecoration: 'none'}}>
                <div className='sidebar_chat' style={{color: 'black'}}>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${random}.svg`}/>
                    <div className='sidebar_chatInfo'>
                        <h2>{topic}</h2>
                    </div>
            
                 </div>
            </Link>
            
        ): (
            <div className='sidebar_chat'>
                <h2>New Chat</h2>
             </div>
        )

        
    )
}

export default SidebarChat

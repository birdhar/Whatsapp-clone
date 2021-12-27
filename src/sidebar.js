import React,{useState, useEffect} from 'react'
import {Avatar, IconButton} from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './css/sidebar.css'
import SidebarChat from './sidebarChat';


const Sidebar = ({topics, user, imageDP}) => {

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <div className='sidebar_headerLeft'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${imageDP}.svg`}/>
                <h2>{user}</h2>
                </div>
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>

                    <IconButton>
                        <ChatIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchIcon/>
                    <input type='text' placeholder='Search a new chat'></input>
                </div>
            </div>

            <div className='sidebar_chats'>
                
                
                {topics.map((item, index)=>{
                    
                    return <SidebarChat topic={item} key= {index} id={index}/>
                })}
                
            </div>
        </div>
    )
}

export default Sidebar

import React, {useState,useEffect} from 'react'
import {Avatar, IconButton} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import MicIcon from '@mui/icons-material/Mic'
import {useParams} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './css/chat.css'
import {Link} from 'react-router-dom'


const Chat = ({topics, myMessages, imageDP, user}) => {

    const [topic, setTopic] = useState('')
    const [messages, setMessages] = useState([])
    const {topicid} = useParams();



    useEffect(()=>{
        if (topicid) {
            setTopic(topics[topicid])
            
            setMessages([])
            myMessages[topicid].forEach(element => {
                setMessages(old => [...old, element])
            });   
        }
        
    },[topicid])
    

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Link to ='/'>
                    <ArrowBackIcon />
                </Link>
                
                <Avatar src={`https://avatars.dicebear.com/api/human/${imageDP}.svg`}/>

                <div className='chat_headerInfo'>
                    <h3>{topic}</h3>
                    <p>Last seen</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className='chatbody'>

            {messages.map((message, index)=>{
                const date = message.time.split('T')[0];
                const time = message.time.split('T')[1];
                if (message.from === user) {
                    return (
                        <div className='chatbody_msg receiver' key={index}>
                            <span className='chat_name'>{message.from}</span>
                                 {message.message}
                            <span className='chat_date'>{date}</span>
                             <span className='chat_time'>{time}</span>
                        </div>
                     ); 
                }
                else{
                    return (
                        <div className='chatbody_msg' key={index}>
                             <span className='chat_name'>{message.from}</span>
                                 {message.message}
                            <span className='chat_date'>{date}</span>
                            <span className='chat_time'>{time}</span>
                        </div> 
                    )
                }
         })}

                {/* <div className='chatbody_msg'>
                    <span className='chat_name'>Roshan</span>
                    Hi
                    <span className='chat_time'>15:28</span>
                </div>
                <div className='chatbody_msg receiver'>
                    <span className='chat_name'>Birat</span>
                    Hello
                    <span className='chat_time'>15:28</span>
                </div>
                <div className='chatbody_msg'>
                    <span className='chat_name'>Roshan</span>
                    How are you?
                    <span className='chat_time'>15:28</span>
                </div>  */}
            </div>

            <div className='chat_footer'>
                <EmojiEmotionsIcon/>
                <AttachFileIcon/>
                <form>
                    <input type='text' placeholder='type your message'/>
                    <input type='submit'/>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat

import './App.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Sidebar from './sidebar';
import Chat from './chat';
import apiItems from './api'
import { useState, createContext} from 'react';

const random = Math.floor(Math.random()*5000);



function App() {
const {user} = apiItems;
const chats = apiItems.chats;
console.log(chats);
function getTopics(api) {
    let topics = [];

    for (let i = 0; i < api.length; i++) {
        topics = [...topics, api[i].topic];
        
    }
    return topics;
}
const topics = getTopics(chats)




function getMessages(api) {
    let myMessages = [];
    api.forEach(element => {
      myMessages = [...myMessages, element.messages];
    });
    return myMessages;
}   
const messages = getMessages(chats)

  const [chatopics, setChatTopics] = useState(topics)
  const [chatMessages, setChatMessages] = useState(messages);

  return (
    <Router>
      <Switch>
        <div className='App'>
         <div className='app_body'>
          <Route exact path='/'>
          <Sidebar topics= {chatopics} imageDP={random} user={user}/>
          </Route>

          <Route path='/topic/:topicid'>
            <Chat topics= {chatopics} imageDP={random} myMessages={chatMessages} user={user}/>
            
          </Route>
        </div>
      </div>
    </Switch>
   </Router>
  )
}

export default App ;

import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import { ChatFeed, Login } from './components';

import { projectID } from './config';

import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) {
        return <Login />;
    }

    const userName = localStorage.getItem('username');
    const userSecret = localStorage.getItem('password');

    return (
        <ChatEngine
            height='100vh'
            projectID={projectID}
            userName={userName}
            userSecret={userSecret}
            renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;

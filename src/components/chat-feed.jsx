import React from 'react';

import { FormMessage, OwnerMessage, TheirMessage } from './message';

const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;

    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isOwnerMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
                float: isOwnerMessage ? 'right' : 'left',
                backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
        />
    ));

    const renderMessage = () => {
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isOwnerMessage = userName === message.sender.username;

            return (
                <div ke={`msg_${index}`} style={{ width: '100%' }}>
                    <div className='message-block'>
                        {
                            isOwnerMessage
                                ? <OwnerMessage message={message} />
                                : <TheirMessage message={message} lastMessageKey={messages[lastMessageKey]} />
                        }
                    </div>
                    <div
                        className='read-receipts'
                        style={{
                            marginRight: isOwnerMessage ? 18 : 0,
                            marginLeft: isOwnerMessage ? 0 : 68
                        }}
                    >
                        {renderReadReceipts(message, isOwnerMessage)}
                    </div>
                </div>
            );
        });
    };

    if (!chat) {
        return 'Loading...';
    }

    return (
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>{chat.title}</div>
                <div className='chat-subtitle'>
                    {
                        chat.people.map(person => `${person.person.username}`)
                    }
                </div>
                {renderMessage()}
                <div style={{ height: 100 }} />
                <div className='message-form-container'>
                    <FormMessage {...props} chatId={activeChat} />
                </div>
            </div>
        </div>
    );
};

export default ChatFeed;

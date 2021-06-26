import React from 'react';

const OwnerMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt='message-attachments'
                className='message-image'
                style={{ float: 'right' }}
            />
        );
    }

    return (
        <div
            className='message'
            style={{
                float: 'right',
                marginRight: 18,
                color: 'white',
                backgroundColor: '#3B2A50'
            }}
        >
            {message.text}
        </div>
    );
};

export default OwnerMessage;

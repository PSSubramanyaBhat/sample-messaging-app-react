import React, { useState } from 'react';
import './MessagingApp.css';
import cn from 'classnames';

import SendMessagePage from './SendMessagePage';
import ViewMessagePage from './ViewMessagePage';


const MessagingApp = () => {

    const [flag, setflag] = useState(0);
    if (flag === 0) {
        return (
            <div class="BackgroundLayout">
                <div class="flexDisplay">
                    <button class={cn('sendMsgBtn', { sendMsgBtnHighlighted: flag === 0 })}
                        onClick={() => {
                            setflag(0);
                        }}>
                        Send Message
                    </button>

                    <button class="viewMsgBtn"
                        onClick={() => {
                            setflag(1);
                        }}>
                        View Messages
                    </button>
                </div>
                <SendMessagePage></SendMessagePage>
            </div>
        );
    } else {
        return (
            <div class="BackgroundLayout">
                <div class="flexDisplay">
                    <button class="sendMsgBtn"
                        onClick={() => {
                            setflag(0);
                        }}>
                        Send Message
                    </button>

                    <button class={cn('viewMsgBtn', { viewMsgBtnHighlighted: flag === 1 })}
                        onClick={() => {
                            setflag(1);
                        }}>
                        View Messages
                    </button>
                </div>

                <ViewMessagePage></ViewMessagePage>
            </div>
        );
    }
}

export default MessagingApp;
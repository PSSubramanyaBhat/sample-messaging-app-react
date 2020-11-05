import React, { useState, useEffect } from 'react';
import './MessagingApp.css';
import SendMessagePage from './SendMessagePage';

import cn from 'classnames';

import { readFromStorage, writeToStorage } from './LocalStorage';


const DISPLAY_MESSAGE = 'displayMessage'
const READ_STATUS = 'readStatus';
// const SELECTED_MESSAGE = 'selectedMessage'
const MESSAGE_NUMBER = 'message_number';
const CHECKBOX = 'checkbox';


const ViewMessagePage = () => {


    const [selectedMessage, setSelectedMessage] = useState('');
    const dispMsg = JSON.parse(localStorage.getItem('message'));   //TRYING......




    const displayingMsg = JSON.parse(localStorage.getItem('displayMessage'));
    // const [displayed, setDisplayedState] = useState(() => readFromStorage(DISPLAYED) || 0);


    const [readMessage, setReadMessage] = useState(() => readFromStorage(READ_STATUS) || []);

    const [highlightMessage, setHighlightMessage] = useState(() => readFromStorage(MESSAGE_NUMBER) || 0);

    const [checkStatus, setCheckBox] = useState(() => readFromStorage(CHECKBOX) || false);
    // const [checkStatus, setCheckBox] = useState(() => readFromStorage(CHECKBOX) || false);



    const goToMessage = (messageNumber) => {
        setHighlightMessage(messageNumber);
        return dispMsg[messageNumber];
    };


    useEffect(() => {
        writeToStorage(READ_STATUS, readMessage);
        writeToStorage(CHECKBOX, checkStatus);
    });

    useEffect(() => {
        writeToStorage(CHECKBOX, checkStatus);
    },[checkStatus]);

    useEffect(() => {
        setCheckBox(false);
    },[highlightMessage]);



    
    function renderOldMessages() {
        if (dispMsg.length === 0 || dispMsg === null) {
            return (
                <h4 class="NoMessage">There are no messages to show</h4>
            );
        } else {
            return dispMsg.map((b, index) => (
                <li key={index}>
                    <h6 class={cn('NewMessage', { ReadMessage: readMessage[index] === 'read' })}>New</h6>
                    <div class="MessageContent">
                        <div class="MessageHistoryNumber"
                            onClick={() => {
                                goToMessage(index);
                                setSelectedMessage(dispMsg[index]);

                                writeToStorage(DISPLAY_MESSAGE, dispMsg[index]);
                            }}
                        >
                            {`Message ${index + 1}`}
                        </div>
                        <button class={cn('MessageHistoryButton', { MessageHistoryButtonSelected: index === highlightMessage })}
                            onClick={() => {
                                goToMessage(index);
                                setSelectedMessage(dispMsg[index]);

                                writeToStorage(DISPLAY_MESSAGE, dispMsg[index]);


                                readMessage[index] = 'read';

                                // console.log(readMessage[index]);

                                // console.log(readMessage);

                                setReadMessage(readMessage);
                                // writeToStorage(READ_STATUS, readMessage); //PARTIALLY WORKING......
                            }}
                        >
                            {dispMsg[index]}
                        </button>
                    </div>
                </li>
            ));
        }
    }

    return (
        <div class="flexDisplay2">
            <div class="messageHistoryDisplay">
                <ul>
                    <ul>
                        <ol class="History">{renderOldMessages()}</ol>
                        {/* <ol class="History">{renderMessageNumber()}</ol> */}
                    </ul>
                </ul>

            </div>

            <div class="messageDisplay">
                <form>
                    <label class="Label">Message Detail</label>
                    <br></br>
                    <div
                        id="symbol1"
                        class="DisplaySelectedMessage"
                    >
                        {selectedMessage}
                    </div>
                </form>


                <input class="CheckBox"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                    checked={checkStatus}
                    // checked={readMessage[highlightMessage]==='read'}
                    onClick={() => {
                        console.log("YUVRAJ SINGH......");
                        console.log(highlightMessage);
                        setCheckBox(true);

                        readMessage[highlightMessage] = 'unread';
                        setReadMessage(readMessage);
                    }}
                >

                </input>
                <label for="messageRead"> mark message as unread</label><br></br>

                <button class="DeleteMessageButton"
                    selected={false}
                    onClick={() => {

                    }}
                >
                    Delete
                    </button>
            </div>
        </div>
    );
}

export default ViewMessagePage;
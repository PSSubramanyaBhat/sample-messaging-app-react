import React, { useState, useEffect } from 'react';
import './MessagingApp.css';
import { readFromStorage, writeToStorage } from './LocalStorage';

const MESSAGE_TITLE = 'messageTitle';
const MESSAGE_BODY = 'messageBody';
const MESSAGE_NUMBER = 'message_number';
const MESSAGE = 'message';
const SENT = 'sent';
const READ_STATUS = 'readStatus';


const SendMessagePage = () => {

    const [sent, setSentMessageFlag] = useState(() => readFromStorage(SENT) || 0);

    // const [sent, setSentMessageFlag] = useState(0);

    const [messageNumber, setMessageNumber] = useState(() => readFromStorage(MESSAGE_NUMBER) || 0);


    const [title, setTitle] = useState(() => readFromStorage(MESSAGE_TITLE) || '');

    const [messageBody, setMessageBody] = useState(() => readFromStorage(MESSAGE_BODY) || ''); //PARTIALLY WORKING......
    // const [messageBody, setMessageBody] = useState(() => readFromStorage(MESSAGE_BODY) || []); //TRYING......


    const [msgTitle, setMessageTitleArray] = useState(() => readFromStorage(MESSAGE) || []);

    const [msgBody, setMessageBodyArray] = useState(() => readFromStorage(MESSAGE) || []);

    const [readMessage, setReadMessage] = useState(() => readFromStorage(READ_STATUS) || []);


    useEffect(()=> {
        // writeToStorage(MESSAGE_BODY, msgBody); //PARTIALLY WORKING......
        if (msgBody!==[]) {
            // writeToStorage(MESSAGE_BODY, msgBody); //PARTIALLY WORKING......
            writeToStorage(MESSAGE_TITLE, msgTitle);
            writeToStorage(MESSAGE, msgBody); //PARTIALLY WORKING......
            writeToStorage(READ_STATUS, readMessage); //PARTIALLY WORKING......
        }
        console.log(msgBody);
    },[msgBody, msgTitle, readMessage]);


    function saveMessageTitle(message_Title) {

        setMessageTitleArray([...msgTitle, message_Title]);
        writeToStorage(MESSAGE_TITLE, msgTitle);
        console.log(msgTitle);

    }


    function saveMessageDescription(message_Body) {
        setMessageBodyArray([...msgBody, message_Body]);
        // writeToStorage(MESSAGE_BODY, msgBody); //PARTIALLY WORKING......
        writeToStorage(MESSAGE, msgBody); //TRYING......

        setReadMessage([...readMessage, 'unread']);
        writeToStorage(READ_STATUS, readMessage); //PARTIALLY WORKING......

        console.log(msgBody);
    }

    
    

    if (sent === 0) {
        return (
            <div>
                <div class="bodyDisp">
                    <form>
                        <label>Brief Message</label>
                        <br></br>
                        <textarea
                            type="text"
                            cols="40"
                            rows="2"
                            // id="symbol1" 
                            placeholder="Write a brief description here"
                            onChange={(event) => {
                                let currentDescription = event.target.value;
                                setTitle(currentDescription);
                            }}
                        >
                        </textarea>
                    </form>
                    <br></br>
                    <form>
                        <label>Details</label>
                        <br></br>
                        <textarea
                            type="text"
                            cols="40"
                            rows="10"
                            placeholder="Write your Message body here"
                            onChange={(event) => {
                                let currentMessageBody = event.target.value;
                                setMessageBody(currentMessageBody);
                            }}
                        >
                        </textarea>
                    </form>
                    <button class="SendButton"
                        selected={false}
                        onClick={() => {
                            setMessageNumber((prevNo) => prevNo + 1);

                            console.log("Hellonvifvbfv");

                            console.log(messageNumber);


                            saveMessageTitle(title);
                            // saveMessageDescription

                            saveMessageDescription(messageBody);// WORKING......
                            // saveMessageDescription(currentMessageBody);
                            writeToStorage(MESSAGE_NUMBER, messageNumber + 1);
                            
                            setSentMessageFlag(1)
                            writeToStorage(SENT, 1);
                            // window.onRefresh();
                        }}
                    >
                        Send
                    </button>
                </div>

            </div>
        );
    } else {
        return (
            <div class="padScreenLeft">

                {/* <h3>Want to Send another message?</h3> */}
                <div class="AlertMessage">Want to Send another message?</div>

                <button class="SendAnotherMessageButton"
                        selected={false}
                        onClick={() => {
                            setSentMessageFlag(0)
                            writeToStorage(SENT, 0);
                            // window.onRefresh();
                        }}
                    >
                        YES
                    </button>
            </div>
        );
    }
}

export default SendMessagePage;
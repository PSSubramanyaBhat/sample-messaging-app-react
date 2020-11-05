import React, { useState } from 'react';
import './MessagingApp.css';
import SendMessagePage from './SendMessagePage';

import { readFromStorage, writeToStorage } from './LocalStorage';


const DISPLAY_MESSAGE = 'displayMessage'
// const DISPLAYED = 'displayed';

const ViewMessagePage = () => {


    const [selectedMessage, setSelectedMessage] = useState('');
    // const [selectedMessage, setSelectedMessage] = useState(() => readFromStorage(DISPLAY_MESSAGE) || '');



    const dispMsg = JSON.parse(localStorage.getItem('messageBody'));

    const displayingMsg = JSON.parse(localStorage.getItem('displayMessage'));


    // const [displayed, setDisplayedState] = useState(() => readFromStorage(DISPLAYED) || 0);



    const goToMessage = (messageNumber) => {
        // setMessageNumber(messageNumber);

        console.log(dispMsg[messageNumber]);
        // setSelectedMessage(dispMsg[messageNumber]);
        return dispMsg[messageNumber];
        // console.log(dispMsg[2]);
    };



    /*
    function renderOldMessages() {
        if (dispMsg === null) {
            return (
                <h4>There are no messages to show</h4>
            );
        } else {
            return dispMsg.map((b, index) => (
                <li key={index}>
                    <button class="MessageHistoryButton"
                        onClick={() => {
                            goToMessage(index);
                            setSelectedMessage(dispMsg[index]);
                            // window.location.reload();
                            // <ViewMessagePage></ViewMessagePage>
                            writeToStorage(DISPLAY_MESSAGE, dispMsg[index]);
                        }}
                    >
                        {`Message ${index + 1}`}
                    </button>
                </li>
            ));
        }
    }  */      //WORKING CODE SNIPPET


    function renderOldMessages() {
        if (dispMsg === null) {
            return (
                <h4 class="NoMessage">There are no messages to show</h4>
            );
        } else {
            return dispMsg.map((b, index) => (
                <li key={index}>
                    <h6>New</h6>
                    <div class="MessageContent">
                        <div class="MessageHistoryNumber"
                            onClick={() => {
                                goToMessage(index);
                                setSelectedMessage(dispMsg[index]);
                                // window.location.reload();
                                // <ViewMessagePage></ViewMessagePage>
                                writeToStorage(DISPLAY_MESSAGE, dispMsg[index]);
                            }}
                        >
                            {`Message ${index + 1}`}
                        </div>
                        <button class="MessageHistoryButton"
                            onClick={() => {
                                goToMessage(index);
                                setSelectedMessage(dispMsg[index]);
                                // window.location.reload();
                                // <ViewMessagePage></ViewMessagePage>
                                writeToStorage(DISPLAY_MESSAGE, dispMsg[index]);
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


                    {/* <textarea
                        type="text"
                        cols="35"
                        rows="10"
                        id="symbol1"
                        class="DisplaySelectedMessage"
                    // placeholder="Write a brief description here"
                    // onChange={(event) => {
                    // }}
                    >
                        {selectedMessage}
                    </textarea> */}

                    <div
                        // type="text"
                        // cols="35"
                        // rows="10"
                        id="symbol1"
                        class="DisplaySelectedMessage"
                    >
                        {selectedMessage}
                    </div>
                </form>


                <input class="CheckBox" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">

                </input>
                <label for="messageRead"> mark message as read</label><br></br>

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
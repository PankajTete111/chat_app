import React, { useState } from "react";
import useWebSocket from "react-use-websocket";
import logo from "../whatsapp.png";
import avatar from "../1000_F_587956451_Otzy5o3GPgUe2GkWXStVHOYz8XLWs4H7.jpg";  
import "../component/Chat.css";

const Chat = () => {
  const socketUrl = "ws://localhost:3050";
  const [messageInput, setMessageInput] = useState("");

  const { sendMessage } = useWebSocket(socketUrl, {
    onOpen: () => console.log("WebSocket connection opened"),
    shouldReconnect: (closeEvent) => true,
  });

  const handleMessageChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      sendMessage(messageInput);
      setMessageInput("");
    }
  };

  return (
    <div className="container-fluid">
      <div className="col-md-12 d-flex">
        <div className="col-md-4" id="mainrightside">
          <nav className="navbar" id="navmainleft">
            <div className="d-flex justify-content-lg-start">
              <a className="navbar-brand" href="#">
                <img
                  src={avatar}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                  id="leftlogo"
                />
              </a>
            </div>
            
          </nav>
          <div className="  ">
          <div className="col-md-10">
              <input className="w-100 text search" width="100"></input>
            </div>
           <div className="col-md-2">
              
           </div>
          </div>
          <div className="col-md-12">
            <div className="card ">
              <div className="d-flex leftcards">
                <img
                  src={avatar}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                  id="leftlogo"
                />{" "}
                <div className="col-md-10 d-flex info justify-content-md-between">
                <h6>Hemant</h6>
                <h6>01:00:34</h6>
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex leftcards">
                <img
                  src={avatar}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                  id="leftlogo"
                />{" "}
                <div className="col-md-10 d-flex info justify-content-md-between">
                <h6>Rahul</h6>
                <h6>01:00:34</h6>
                </div>
              </div>
            </div>

            <div className="card ">
              <div className="d-flex leftcards">
                <img
                  src={avatar}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                  id="leftlogo"
                />{" "}
                <div className="col-md-10 d-flex info justify-content-md-between">
                <h6>Uday</h6>
                <h6>01:00:34</h6>
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex leftcards">
                <img
                  src={avatar}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                  id="leftlogo"
                />{" "}
                <div className="col-md-10 d-flex info justify-content-md-between">
                <h6>Rupesh</h6>
                <h6>01:00:34</h6>
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex leftcards">
                <img
                  src={avatar}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                  id="leftlogo"
                />{" "}
                <div className="col-md-10 d-flex info justify-content-md-between">
                <h6>Rupesh</h6>
                <h6>01:00:34</h6>
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex leftcards">
                <img
                  src={avatar}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                  id="leftlogo"
                />{" "}
                <div className="col-md-10 d-flex info justify-content-md-between">
                <h6>Rupesh</h6>
                <h6>01:00:34</h6>
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="d-flex leftcards">
                <img
                  src={avatar}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                  id="leftlogo"
                />{" "}
                <h6>Rupesh</h6>
              </div>
            </div>
            <div className="card">
              <div className="d-flex leftcards">
                <img
                  src={avatar}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                  id="leftlogo"
                />{" "}
                <h6>Rupesh</h6>
              </div>
            </div>
            <div className="card">
              <div className="d-flex leftcards">
                <img
                  src={avatar}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                  id="leftlogo"
                />{" "}
                <h6>Rupesh</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <nav className="navbar" id="navmainleft">
            <div className="container d-flex justify-content-lg-start">
              <a className="navbar-brand" href="#">
                <img
                  src={logo}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-text-top"
                />
              </a>
              <h3>Hemant</h3>
              <div>online</div>
            </div>
          </nav>

          <div className="chat-box">{/* Display chat messages here */}</div>

          <form>
            <div className="input-group mb-3">
              <input
                className="form-control"
                placeholder="Type a message..."
                value={messageInput}
                onChange={handleMessageChange}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;

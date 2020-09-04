import React from "react";
import mapImage from "../assets/Map.svg";
// import chatImage from "../assets/Chat.svg";

function Chat() {
  return (
    <section className="chat" id="chatSection">
      <div className="chat__map-container">
        <h4>Map</h4>
        <img className="chat__map" src={mapImage} alt="map" />
      </div>
      <div className="chat__chat-box-container">
        <h4>Chat</h4>
        <img className="chat__chat-box" src={mapImage} alt="map" />
      </div>
    </section>
  );
}

export default Chat;

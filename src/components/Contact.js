import React from "react";
import "./Contact.css";



function Contact(props) {
return (
      <div  className="Contact">
        <img src={props.avatar} className="avatar" alt="imgAvatar"></img>
        <div>
          <h2 className="name">{props.name}</h2>
        
          <div className="status">
            <div className={props.status ? "status-online" : "status-offline" }></div>
          <p className="status-text">{props.status ? "online" : "Offline" }</p>
          </div>
          </div>
      </div>


  
)
}


export default Contact;
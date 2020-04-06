import React from 'react';
import './contact.css';

const Contact = props => (
  <div className="Contact">
    <img class="avatar" src={props.avatar} alt="" />
    <div class="name">
      {props.name}
      <div class="status">
        <span class={props.online ? 'status-online' : 'status-offline'}></span>
        <p class="status-text">{props.online ? 'online' : 'offline'}</p>
      </div>
    </div>
  </div>
);

export default Contact;

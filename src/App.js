import React from "react";
import "./App.css";
import Contact from "./components/contact";
import "./components/contact.css";

function App() {
  return (
    <div className="Contact">
      <img
        class="avatar"
        src="https://randomuser.me/api/portraits/women/91.jpg"
        alt=""
      />
      <div class="name">
        Tara Curtis
        <div class="status">
          <span class="status-online"></span>
          <p class="status-text">online</p>
        </div>
      </div>
    </div>
  );
}

export default App;

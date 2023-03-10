import React, { useState } from "react";
import iconSetting from "./assets/icon-settings.svg";
import iconHome from "./assets/icon-home.svg";
import iconBlock from "./assets/icon-blockchain.svg";
import iconDatabase from "./assets/icon-database.svg";
import iconSpeaker from "./assets/icon-speaker.svg";
import iconFolder from "./assets/icon-folders.svg";
import iconAcc from "./assets/icon-accounts.svg";
import iconLock from "./assets/icon-lock.svg";
import menu from "./assets/menu.png";
import gue from "./assets/gue.png";

import "./Home.css";

function Home() {
  const toggleSidebar = () => document.body.classList.toggle("open");
  return (
    <body>
      <div class="greetings">
        <span>H</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>O</span>
      </div>
      <div classname="ppGue">
        <img class="pp" src={gue} />
      </div>
      <div class="greetings">
        <span>P</span>
        <span>E</span>
        <span>O</span>
        <span>P</span>
        <span>L</span>
        <span>E</span>
      </div>

      <nav class="sidebar">
        <div class="sidebar-inner">
          <header class="sidebar-header">
            <button type="button" class="sidebarburger"></button>
            <img src={menu} class="sidebar-logo" onClick={toggleSidebar} />
            <span>Menu</span>
          </header>
          <nav class="sidebar-menu">
            <button type="button">
              <img src={iconHome} />
              <span>Home</span>
            </button>
            <button type="button" class="has-border">
              <img src={iconSetting} />
              <span>Settings</span>
            </button>
            <button type="button">
              <img src={iconBlock} />
              <span>Github</span>
            </button>
            <button type="button">
              <img src={iconSpeaker} />
              <span>Spotify</span>
            </button>
            <button type="button">
              <img src={iconFolder} />
              <span>Folders</span>
            </button>
            <button type="button">
              <img src={iconAcc} />
              <span>Profile</span>
            </button>
            <button type="button">
              <img src={iconLock} />
              <span>Security</span>
            </button>
          </nav>
        </div>
      </nav>
    </body>
  );
}

export default Home;

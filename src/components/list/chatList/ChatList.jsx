import { useState } from "react";
import "./chatList.css";
function ChatList() {
  const [addmode, setaddmode] = useState(false);
  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="search" />
        </div>
        <img
          src={addmode ? "./minus.png" : "./plus.png"}
          alt=""
          className="add"
          onClick={() => setaddmode(!addmode)}
        />
      </div>
      <div className="item">
        <div className="avetor">
          <img src="./avatar.png" alt="" />
        </div>
        <div className="text">
          <span>username</span>
          <p>Hellow</p>
        </div>
      </div>
      <div className="item">
        <div className="avetor">
          <img src="./avatar.png" alt="" />
        </div>
        <div className="text">
          <span>username</span>
          <p>Hellow</p>
        </div>
      </div>
      <div className="item">
        <div className="avetor">
          <img src="./avatar.png" alt="" />
        </div>
        <div className="text">
          <span>username</span>
          <p>Hellow</p>
        </div>
      </div>
      <div className="item">
        <div className="avetor">
          <img src="./avatar.png" alt="" />
        </div>
        <div className="text">
          <span>username</span>
          <p>Hellow</p>
        </div>
      </div>
      <div className="item">
        <div className="avetor">
          <img src="./avatar.png" alt="" />
        </div>
        <div className="text">
          <span>username</span>
          <p>Hellow</p>
        </div>
      </div>
    </div>
  );
}

export default ChatList;

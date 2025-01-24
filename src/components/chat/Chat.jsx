import { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
function Chat() {
  const [emoji, setemoji] = useState(false);
  const [text, setText] = useState("");
  const hendleEmoji = (e) => {
    setText((pre) => pre + e.emoji);
    setemoji(false);
  };

  console.log(text);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <span>username</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="massage own">
          
          <div className="text">
            <p>
              Lorem  amet gydfh bdnfd adip icing elit. Debitis.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="massage ">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <p>
              Lorem  amet gydfh bdnfd adip icing elit. Debitis.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="massage own">
          
          <div className="text">
            <p>
              Lorem  amet gydfh bdnfd adip icing elit. Debitis.
            </p>
            <span>1min ago</span>
          </div>
        </div>
        <div className="massage ">
          <img src="./avatar.png" alt="" />
          <div className="text">
            <img src="https://www..com/url?sa=i&url=https%3A%2F%2Fwww.imgacademy.com%2F&psig=AOvVaw3s-bDmH1852rOODOKiyVAS&ust=1722401321410000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLiBrof7zYcDFQAAAAAdAAAAABAE" alt="" />
            <p>
              Lorem  amet gydfh bdnfd adip icing elit. Debitis.
            </p>
            <span>1min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <div className="inputfild">
          <input
            type="text"
            value={text}
            placeholder="Type a massage..."
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setemoji(!emoji)} />
          <div className="peaker">
            <EmojiPicker open={emoji} onEmojiClick={hendleEmoji} />
          </div>
        </div>
        <button className="send">send</button>
      </div>
    </div>
  );
}

export default Chat;

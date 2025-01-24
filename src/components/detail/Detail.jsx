import "./detail.css";
function detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Username</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privecy</span>
            <img src="./arrowUp.png" alt="" />          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shered photos</span>
            <img src="./arrowDown.png" alt="" />          </div>
        <div className="photos">
          <div className="phptoitem">
            <div className="photodetail">
              <img src="./avatar.png" alt="" />
              <span>photo.png</span>
            </div>
            <img src="./download.png" alt=""  className="icon"/>
          </div>
        </div>
        <div className="photos">
          <div className="phptoitem">
            <div className="photodetail">
            <img src="./avatar.png" alt="" />              <span>photo.png</span>
            </div>
            <img src="./download.png" alt="" className="icon"/>
          </div>
        </div>
        <div className="photos">
          <div className="phptoitem">
            <div className="photodetail">
            <img src="./avatar.png" alt="" />              <span>photo.png</span>
            </div>
            <img src="./download.png" alt="" className="icon" />
          </div>
        </div>
        <div className="photos">
          <div className="phptoitem">
            <div className="photodetail">
            <img src="./avatar.png" alt="" />              <span>photo.png</span>
            </div>
            <img src="./download.png" alt="" className="icon"/>
          </div>
        </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shered Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  );
}

export default detail;

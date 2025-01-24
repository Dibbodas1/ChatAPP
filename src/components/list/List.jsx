import "./list.css"
import UserInfo from "./userInfo/userInfo"
import ChatList from "./chatList/ChatList"

function list() {
    return (
        <div className="list">
            
            <UserInfo/>
            <ChatList/>
        </div>
    )
}

export default list

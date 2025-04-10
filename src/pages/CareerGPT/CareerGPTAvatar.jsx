import BotAvatar from "../../assets/images/CareerGPT_Bot.gif"
import "./styles/CareerGPTAvatar.css"
import { Link } from "react-router-dom"
export default function CareerGPTAvatar(){
    const print=()=>
    {
        console.log("hello clicked");
    }
    return (
        <>
            <div className="avatarContainer">
            <button onClick={print}><Link to="OfferCounselling" className="btn"><img className="avatarRobot" src={BotAvatar} alt="Bot"/></Link></button>
            </div>
        </>
    )
}
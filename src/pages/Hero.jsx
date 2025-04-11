import HeroCSS from "../assets/styles/Hero.module.css"
import heroImage from "../assets/images/Hero_main.png"
import robot from "../assets/images/Hero_robot.svg"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { authenticate, logout } from "../features/authentication/authenticationSlice"
import React from "react"

export default function Hero(){
    const {is_exist, role} = useSelector((store) => store.authentication)
    const dispatch = useDispatch()
    const clickHandler=()=>
    {
        window.open("https://app.thinkstack.ai/bot/previews/iframeview.html?bot=aHR0cHM6Ly9hcHAudGhpbmtzdGFjay5haS9ib3QvaW5kZXguaHRtbD9jaGF0Ym90X2lkPTY3ZjhiYjA3NzliMzQ3MzkwMjcxNTEwYiZ0eXBlPWlubGluZQ==")
    }
    React.useEffect(() => {
        async function fetchAuthentication() {
            await dispatch(authenticate())
        }
        fetchAuthentication()
    }, [])

    return (
        <div className={HeroCSS.hero}>
            <section className={`card ${HeroCSS.card} mt-5 `}>
                <div className={`row no-gutters ${HeroCSS.card__row}`}>
                    <div className={`col-md-6 ${HeroCSS.card__col}`}>
                    <div className={`card__image ${HeroCSS.cardImage} mt-5`}>
                        <img src={heroImage} alt="Career Guidance.pk" className={`img-fluid ${HeroCSS.card__image_img}`} />
                    </div>
                    </div>
                    <div className={`col-md-6 ${HeroCSS.card__col}`}>
                    <div className={`card__content ${HeroCSS.card__content}`}>
                        {!is_exist && <Link to="login" className={`btn ${HeroCSS.loginButton} `}>Login/Register</Link>}
                        <div className={` ${HeroCSS.BtnDiv} d-flex`}>
                           
                            {is_exist== true && role == 'A' && <Link to="admin" className={`btn ${HeroCSS.DashboardBtn}`}>Dashboard</Link>}
                            {is_exist== true && role == 'C' && <Link to="counsellor" className={`btn ${HeroCSS.DashboardBtn} `}>Dashboard</Link>}
                            {is_exist== true && role == 'B' && <Link to="counsellor" className={`btn ${HeroCSS.DashboardBtn} `}>Dashboard</Link>}
                            {is_exist== true && <Link to="." className={`btn  ${HeroCSS.DashboardBtn}
                             ${role=='U' ? HeroCSS.UserLogoutButton : ''}
                            `} onClick={(event)=>{
                                dispatch(logout())
                                window.location.reload()
                            }}>Logout</Link>}
                           
                        </div>       
                        <h1 className={`card-title ${HeroCSS.cardTitle} mt-4`}>BotGuidedPathways</h1>
                        <p className={`card-text ${HeroCSS.cardText}`}>BotGuidedPathways is one of the kind career counseling system of India to facilitate youth and students in determining their career path and relevant education based on their personality.</p>
                        <Link to="" className={`btn  ${HeroCSS.chatButton}`} onClick={clickHandler}>Chat with CareerGPT <span><img src={robot} className={`${HeroCSS.robot}  mb-2`}  /></span></Link>
                        
                    </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
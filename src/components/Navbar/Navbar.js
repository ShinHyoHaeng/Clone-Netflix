import './navbar.scss'
import { ArrowDropDown, Close, Menu, Notifications, Search } from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

 const Navbar = () => {
    // 스크롤을 내리면 배경색이 들어가고 다시 스크롤이 최상단으로 올라가면 배경색이 투명하게 바뀌도록 하는 함수
    const [isScrolled, setIsScrolled] = useState(false)
    
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0? false:true);
        return () => {window.onscroll = null};
    }

    // 모바일 네비게이션 바 동작 관련 함수
    const [clicked, setClicked] = useState(false);

    //false = 메뉴 바, true = 닫기 버튼
    const handleClick = () => {
        setClicked(!clicked);
        if(clicked){
            document.body.style.overflow = "unset";
        }else{
            document.body.style.overflow = "hidden";
        }
    }

    return (
        <>
            {/* 스크롤이 움직이면 navbar 클래스에 scrolled 클래스 추가 */}
            <BrowserView>
                <div className={isScrolled ? "navbar scrolled":"navbar"}> 
                    <div className="container">
                        <div className="left">
                            <Link to="/React-Netflix-Test/list">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                            </Link>
                            {/* 추후에 페이지를 만든 후 수정할 예정 */}
                            <span>Homepage</span>
                            <span>Series</span>
                            <span>Movies</span>
                            <span>New and Popular</span>
                            {/* <span>My List</span> */}
                        </div>
                        <div className="right">
                            <Search className="icon"/>
                            <span>KID</span>
                            <Notifications className="icon"/>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile" /> 
                            <div className="profile">
                                <ArrowDropDown className="icon"/>
                                <div className="options">
                                    <Link to="/React-Netflix-Test/register"><span>Register</span></Link>
                                    <Link to="/React-Netflix-Test/login"><span>Login</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserView>

            <MobileView>
                {/* mobile 버전 navbar */}
                <div className={isScrolled ? "navbar-mobile scrolled" : "navbar-mobile"}>
                    <div className="top">
                        <div className="left">
                            <div className="menuIcon" onClick={handleClick}>
                                {
                                    clicked? 
                                    <Close className="icon" /> : <Menu className="icon" />
                                }
                            </div>
                            <Link to="/React-Netflix-Test/list">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                            </Link>
                        </div>
                        <div className="right">
                            <Search className="icon"/>
                            <Notifications className="icon"/>
                        </div>
                    </div>
                    <div className={clicked ? "navPanel active" : "navPanel"}>
                        <div className="profile">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile" /> 
                            <div className="options">
                                <p>Guest</p>
                                <Link to="/React-Netflix-Test/register"><span>Register</span></Link>
                                <Link to="/React-Netflix-Test/login"><span>Login</span></Link>
                            </div>
                        </div>
                        <div className="menu">
                            <ul>
                                <li>Homepage</li>
                                <li>Series</li>
                                <li>Movies</li>
                                <li>New and Popular</li>
                                <li>My List</li>
                            </ul>
                        </div>
                        <div className="etc">
                            <span>KID</span>
                        </div>
                    </div>
                </div>
            </MobileView>
        </>
     )
 }
 
 export default Navbar
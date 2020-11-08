import React from 'react'
import { Avatar } from '@material-ui/core'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      
      <div className="header__left">
        <img className="header__leftLogo"
          src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
          alt="twitch logo"/>
        <h4>Following</h4>
        <h4>Browse</h4>
        <div className="header__verticalLine"></div>
        <h4>Esports</h4>
        <h4>Music</h4>
        <i className="fas fa-ellipsis-h"></i>
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search"/>
        <div className="header__centerLogoContainer">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comment-alt"></i>

          <div className="header__rightBits">
            <i className="fas fa-gem"></i>
            <h5>Get Bits</h5>            
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  )
}

export default Header

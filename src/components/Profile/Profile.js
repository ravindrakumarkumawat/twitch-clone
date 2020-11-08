import React from 'react'
import RecentItem from '../RecentItem/RecentItem'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s88-c-k-c0x00ffffff-no-rj" alt="avatar" />

        <div className="profile__topLeftDetails">
          <h1>cleverprogrammer</h1>
          <h3>820k followers</h3>
        </div>
      </div>

      <div className="profile__topRight">
        <i className="fas fa-heart graybg"></i> 
        <i className="fas fa-bell graybg"></i>       
        <i className="fas fa-ellipsis-v"></i>
      </div>

      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2><i className="fas fa-arrow-up"></i></h2>
        <h2>Chat</h2>
      </div>

      <div className="profile__recent">
        <h2>Recent broadcasts</h2>

        <div className="profile__recentItems">
          <RecentItem 
            url={"https://www.youtube.com/embed/-cMqr9HpZ-Y"}
            title={"React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"}
          />
          <RecentItem 
            url={"https://www.youtube.com/embed/-cMqr9HpZ-Y"}
            title={"React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"}
          />
          <RecentItem 
            url={"https://www.youtube.com/embed/-cMqr9HpZ-Y"}
            title={"React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"}
          />
          <RecentItem 
            url={"https://www.youtube.com/embed/-cMqr9HpZ-Y"}
            title={"React JS Tutorial for Beginners - Full Course in 12 Hours [2021]"}
          />
        </div>
        <div className="profile__categories">
          <h2>cleverprogrammers recently streamed Categories</h2>
          <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg" alt=""/>
          <h3>Science & Technology</h3>     
          </div>
      </div>
    </div>
  )
}

export default Profile

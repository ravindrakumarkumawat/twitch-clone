import React from 'react'
import RecentItem from '../RecentItem/RecentItem'
import './Profile.css'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img src="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s88-c-k-c0x00ffffff-no-rj" alt="avatar" />

        <div className="profile__topLeftDetails">
          <h2>cleverprogrammer</h2>
          <h5>820k followers</h5>
        </div>
      </div>

      <div className="profile__topRight">
        <i className="fas fa-heart graybg"></i> 
        <i className="fas fa-bell graybg"></i>       
        <i className="fas fa-ellipsis-v"></i>
      </div>

      <div className="profile__menu">
        <h4 className="active">Home</h4>
        <h4>About</h4>
        <h4>Schedule</h4>
        <h4>Videos</h4>
        <h4><i className="fas fa-arrow-up"></i></h4>
        <h4>Chat</h4>
      </div>

      <div className="profile__recent">
        <h4>Recent broadcasts</h4>

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
          <h4>cleverprogrammers recently streamed Categories</h4>
          <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg" alt=""/>
          <h5>Science & Technology</h5>     
        </div>
      </div>
    </div>
  )
}

export default Profile

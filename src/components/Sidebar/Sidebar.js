import React from 'react'
import './Sidebar.css'
import Channel from '../Channel/Channel'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOW CHANNELS</h5>
        <Channel avatar="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s88-c-k-c0x00ffffff-no-rj"
        name="cleverprogrammer"
        followers="820k"/>
        <Channel avatar="https://yt3.ggpht.com/a/AATXAJx1mDLn8-L1yG8jIO2yGHvJzqnMZ03dsc3PbNqe=s88-c-k-c0x00ffffff-no-rj"
        name="Codevolution"
        followers="228k"/>
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel avatar="https://yt3.ggpht.com/a/AATXAJx1mDLn8-L1yG8jIO2yGHvJzqnMZ03dsc3PbNqe=s88-c-k-c0x00ffffff-no-rj"
        name="Codevolution"
        followers="228k"/>
        <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to add friends" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar

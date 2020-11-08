import React from 'react'
import './RecentItem.css'

const RecentItem = ({url, title}) => {
  return (
    <div className="item">
      <iframe
        title={title}
        width="300" 
        height="150" 
        src={url} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen={true}></iframe>
        
      <div className="item__details">
        <img src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg" alt=""/>
        <div className="item__detailsText">
          <h4>{title}</h4>
          <p>freecodecamp</p>
          <p>Science & Technology</p>
        </div>
      </div>
    </div>
  )
}

export default RecentItem

import React from 'react'
import './Stream.css'

const Stream = () => {
  return (
    <div className="stream">
      <div className="stream__container">
        <div className="stream__status">
          <div className="stream__statusContainer">
            <div className="stream__statusContainerTop">
              <div className="stream__statusIndicator">OFFLINE</div>
              <h2>Check out the below streams from Clever Progammer</h2>
            </div> 
            <div className="stream__statusInfo">
              <i className="fas fa-bell"></i>
              <p>You will be notified when cleverprogrammer is live</p>
            </div>        
          </div> 
        </div> 
        <div className="stream__videoEmbed">
          <iframe
            title="title"
            width="400" 
            height="195" 
            src="https://www.youtube.com/embed/JJyp8OVwW-s"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen={true}></iframe>
        </div>       
      </div>      
    </div>
  )
}

export default Stream

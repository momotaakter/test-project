import React from "react";
import './video/video.css'

const YoutubeVideo = () => {
  return (
    <div className="video">
  <div className="video-caontainer">

 
      <iframe style={{padding:'10px '}}
        width="100%"
        height="450px"
        src="https://www.youtube.com/embed/hlx6tSF6V7g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
     
</div>
    </div>
  );
};

export default YoutubeVideo;

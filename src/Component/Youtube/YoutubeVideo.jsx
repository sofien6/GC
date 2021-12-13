import React from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo  = ()=>{
  
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube videoId="dBfRefs3NXg" opts={opts} />;
  }

  

export default YoutubeVideo ;
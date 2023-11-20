import React from 'react';
import videoStyles from './videoComponent.module.scss';


const VideoComponent = () => {
  return (
    <section>
      <video width='1080' height='360'controls autoPlay muted className={videoStyles.videoComponent}>
        <source src='/video/Benelli.mp4' type='video/mp4' />
        Ваш браузер не поддерживает тег video.
      </video>
    </section>
  );
};

export default VideoComponent;

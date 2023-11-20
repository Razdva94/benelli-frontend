// import React from 'react';
// import videoStyles from './videoComponent.module.scss';


// const VideoComponent = () => {
//   return (
//     <section>
//       <video width='1080' height='360'controls autoPlay muted className={videoStyles.videoComponent}>
//         <source src='/video/Benelli.mp4' type='video/mp4' />
//         Ваш браузер не поддерживает тег video.
//       </video>
//     </section>
//   );
// };

// export default VideoComponent;
'use client'
import React, {Suspense} from 'react';
import videoStyles from './videoComponent.module.scss';
import Preloader from '../Preloader/Preloader';

const LazyVideo = React.lazy(() => import('./LazyVideo.tsx'));

const VideoComponent = () => {

  return (
    <section className={videoStyles.videoSection}>
      <Suspense fallback={<Preloader />}>
        <LazyVideo />
      </Suspense>
    </section>
  );
};

export default VideoComponent;
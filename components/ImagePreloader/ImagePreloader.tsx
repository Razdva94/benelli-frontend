import React, { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function ImagePreloader({ images, children }:any) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((src:any) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setIsLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    preloadImages();
  }, [images]);

  return isLoaded ? children : <Preloader />;
}

export default React.memo(ImagePreloader);

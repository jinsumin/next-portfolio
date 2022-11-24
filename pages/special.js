import React from "react";

const Special = () => {
    const videoObjectSrc = "kopo-startup-video.mp4";

  return (
    <div>
      <video
          playsInline
          // autoPlay
          // muted
          // loop
          controls
          className="rounded-2xl shadow-2xl"
        >
          <source src={videoObjectSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
    </div>
  );
};

export default Special;

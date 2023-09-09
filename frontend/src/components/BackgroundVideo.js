import React from 'react';

const BackgroundVideo = ({ videoSrc, children }) => {
  return (
    <div className="background-video">
      <video autoPlay loop muted className="video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">{children}</div>
      <style jsx>{`
        .background-video {
          outline: 1px solid;
          position: relative;
          width: 100vh;
          height: 100vh;
          overflow: hidden;
        }

        .video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default BackgroundVideo;

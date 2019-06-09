import React from "react";
import "../assets/styles/video.scss";

function Videos() {
  return (
    <div className="video-main">
      <div className="video-main-content">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/8939aURV9Dc"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <p className="video-description">
          Star Wars Jedi: Fallen Order Gameplay Demo
        </p>
      </div>
      <div className="video-main-content">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/6dl96_-ehbI"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <p className="video-description">
          Tom Clancy's Ghost Recon Breakpoint - Official Cinematic Trailer
        </p>
      </div>
      <div className="video-main-content">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/UjxS9ciNlII"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <p className="video-description">
          Cyberpunk 2077 - Official World Premiere Trailer
        </p>
      </div>
      <div className="video-main-content">
        <iframe
          className="video"
          src="https://www.youtube.com/embed/Hen8tPH0A2w"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <p className="video-description">
          Death Stranding - Official Gameplay Release Date Trailer
        </p>
      </div>
    </div>
  );
}

export default Videos;

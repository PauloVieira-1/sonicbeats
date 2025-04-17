import cloudinary from "cloudinary-video-player";
import { useEffect, useRef } from "react";

const VideoPlayer = ({ id, publicId, ...props }) => {
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = cloudinary;

    const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
      cloudName: "dbmhp9fdm",
      autoplay: false,
      autoplayMode: "loop",
      muted: false,
      controls: true,
      showLogo: false,
    });

    player.source(publicId);
  }, [publicId]);

  return (
    <video ref={playerRef} className="cld-video-player cld-fluid" {...props} />
  );
};

export default VideoPlayer;

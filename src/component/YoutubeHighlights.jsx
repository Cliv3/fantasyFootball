import React, { useEffect, useState } from "react";

const API_KEY = "AIzaSyAbeVGDpSFi6wl7OECVhBMNxi4HwZahy_s";
const CHANNEL_ID = "UCYobYIoHLJTbAQV7t7qt4MQ";
const MAX_RESULTS = 4;

const YoutubeHighlights = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
        );
        const data = await res.json();
        const filtered = data.items.filter(item => item.id.kind === "youtube#video");
        setVideos(filtered);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="bg-black py-10">
      <h2 className="text-white text-2xl font-diacloneRegular tracking-widest text-center mb-10 flex items-center justify-center gap-3">
        <span>★</span> HIGHLIGHTS <span>★</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 max-w-6xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={video.id.videoId}
            className="bg-[#111] text-white shadow-md rounded overflow-hidden"
          >
            <div className="relative">
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full"
              />
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white bg-opacity-60 rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="flex items-center p-4">
              <span
                className={`text-xs font-bold text-white px-2 py-1 mr-2 ${
                  index % 2 === 0 ? "bg-red-600" : "bg-blue-700"
                }`}
              >
                {index % 2 === 0 ? "NEWS" : "UPDATE"}
              </span>
              <p className="text-sm">
                {video.snippet.title.length > 60
                  ? video.snippet.title.slice(0, 60) + "..."
                  : video.snippet.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeHighlights;

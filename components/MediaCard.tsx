// components/MediaCard.tsx
import React from "react";

type MediaCardProps = {
  title: string;
  src: string;
  type: "image" | "audio" | "video";
};

export default function MediaCard({ title, src, type }: MediaCardProps) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h3 className="mb-2 font-semibold">{title}</h3>
      {type === "image" && <img src={src} alt={title} />}
      {type === "audio" && <audio controls src={src} />}
      {type === "video" && <video controls src={src} />}
    </div>
  );
}

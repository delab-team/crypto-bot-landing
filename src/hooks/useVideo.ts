'use client'

import { useEffect, useState } from "react";

const cache = {} as any;

export async function getCachedVideo(url: string) {
  if (cache[url]) {
    return cache[url]; 
  }

  const res = await fetch(url);
  const blob = await res.blob();
  const videoUrl = URL.createObjectURL(blob);

  cache[url] = videoUrl;

  return videoUrl;
}

export default function useVideo(url: string) {
  const [video, setVideo] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const cached = await getCachedVideo(url);
      setVideo(cached);
    };
    load();
  }, [url]);

  return video;
}

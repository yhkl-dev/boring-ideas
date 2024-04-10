'use client'

import { useEffect, useState } from 'react';
import React from 'react';

const UnsplashBackground = () => {
  const [bgurl, setBackgroundUrl] = useState('');

  useEffect(() => {
    const fetchBackground = async () => {
      const accessKey = process.env.UNPLASH_ACCESS_KEY as string;
      const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=nature&orientation=landscape`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setBackgroundUrl(data.urls.full);
      } catch (error) {
        console.error('Error fetching Unsplash image:', error);
      }
    };

    fetchBackground();
  }, []);

  return (
    <div className="h-screen bg-cover bg-center bg-small-url" >
    </div>
  );
};

export default UnsplashBackground;
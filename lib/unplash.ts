const fetchUnsplashBackground = async () => {
  const accessKey = process.env.UNPLASH_ACCESS_KEY as string;
  const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=nature&orientation=landscape`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.urls.full;
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return '';
  }
};

export default fetchUnsplashBackground;
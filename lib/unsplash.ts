export async function getUnsplashImage(query: string, width = 800, height = 600) {
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    // Fallback to placeholder if no API key
    return `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=${width}&h=${height}&fit=crop`;
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&client_id=${accessKey}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from Unsplash');
    }

    const data = await response.json();
    return `${data.urls.raw}&w=${width}&h=${height}&fit=crop`;
  } catch (error) {
    console.error('Unsplash API error:', error);
    // Fallback to a default Unsplash image
    return `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=${width}&h=${height}&fit=crop`;
  }
}

// Predefined images for portfolio (to avoid rate limiting)
export const portfolioImages = {
  ecommerce: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
  saas: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  corporate: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  portfolio: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
  booking: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
};

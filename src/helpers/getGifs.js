export const getGifts = async (category) => {
  const api_key = "k9MrztQ6IzAviINPAOCigoTu2dI7iXQs";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
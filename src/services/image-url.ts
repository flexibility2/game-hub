const getCroppedImageUrl = (image: string) => {
  const newUrl = image.replace(
    "https://media.rawg.io/media/",
    "https://api.rawg.io/media/crop/600/400/"
  );

  return newUrl;
};
export default getCroppedImageUrl;

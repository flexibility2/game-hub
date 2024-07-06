import noImage from "../assets/no-image-placeholder.webp";
const getCroppedImageUrl = (image: string) => {
  if (!image) {
    return noImage;
  }
  const newUrl = image.replace(
    "https://media.rawg.io/media/",
    "https://api.rawg.io/media/crop/600/400/"
  );

  return newUrl;
};
export default getCroppedImageUrl;

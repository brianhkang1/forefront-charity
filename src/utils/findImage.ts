type Image =
  | {
      id: string;
      name: string | null | undefined;
      url: string;
    }
  | undefined;

export default function findImage(
  images: Image[] | undefined,
  name: string,
): Image | undefined {
  return images?.find((image) => {
    return image?.name?.toLowerCase().startsWith(name);
  });
}

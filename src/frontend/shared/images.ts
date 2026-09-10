type SiteImage = {
  id: string;
  src: string;
};

const HERO_SLIDES: SiteImage[] = [
  { id: "pool", src: "/image1.jpg" },
  { id: "grounds", src: "/image3.jpg" },
  { id: "summer", src: "/image2.jpg" },
];

const GALLERY_IMAGES: SiteImage[] = [
  { id: "pool", src: "/image1.jpg" },
  { id: "grounds", src: "/image3.jpg" },
  { id: "lawn", src: "/image4.jpg" },
];

const GALLERY_SOURCES = GALLERY_IMAGES.map((image) => image.src);
const RESTAURANT_PHOTO = "/restaurace-kulturni-dum.jpg";

export { GALLERY_IMAGES, GALLERY_SOURCES, HERO_SLIDES, RESTAURANT_PHOTO };
export type { SiteImage };

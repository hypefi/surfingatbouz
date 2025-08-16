import Image from 'next/image';

export default function GalleryPage() {
  const images = [
    {
      src: "/images/surf-group.jpg",
      alt: "Surf group with their boards on the beach",
      width: 1200,
      height: 800
    },
    {
      src: "/images/surf-action-1.jpg",
      alt: "Young surfer riding a wave with instructor",
      width: 1200,
      height: 800
    },
    {
      src: "/images/surf-action-2.jpg",
      alt: "Surfer balancing on wave",
      width: 1200,
      height: 800
    },
    {
      src: "/images/surf-lesson-1.jpg",
      alt: "Surf lesson practice on the beach",
      width: 1200,
      height: 800
    },
    {
      src: "/images/surf-action-3.jpg",
      alt: "Surfer catching a wave",
      width: 1200,
      height: 800
    },
    {
      src: "/images/surf-action-4.jpg",
      alt: "Surfer riding wave with style",
      width: 1200,
      height: 800
    },
    {
      src: "/images/surf-lesson-2.jpg",
      alt: "Group surf lesson warmup on beach",
      width: 1200,
      height: 800
    },
    {
      src: "/images/surf-lesson-3.jpg",
      alt: "Group running on beach during surf lesson",
      width: 1200,
      height: 800
    },
    {
      src: "/images/surf-action-5.jpg",
      alt: "Surfer showing skills on wave",
      width: 1200,
      height: 800
    },
    {
      src: "/images/surf-warmup.jpg",
      alt: "Surf instructor leading warmup exercises",
      width: 1200,
      height: 800
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Gallery</h1>
      <p className="mb-8 text-lg text-neutral/80">Check out moments from our surf guiding adventures, hosted stays, and epic sessions in Bouznika.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority={index < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 
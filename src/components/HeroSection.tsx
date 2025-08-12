"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const hero_image = [
  { name: "hero1", src: "/hero-images/hero1.png" },
  { name: "hero2", src: "/hero-images/hero2.png" },
  { name: "hero3", src: "/hero-images/hero3.png" },
  { name: "hero4", src: "/hero-images/hero4.jpeg" },
  { name: "hero5", src: "/hero-images/hero5.jpeg" },
  { name: "hero6", src: "/hero-images/hero6.jpeg" },
];

export default function HeroSection() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative w-full px-1 h-[240px] ">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {hero_image.map((image, index) => (
            <div className="min-w-full" key={image.name}>
              <div className="relative h-[190px] w-full sm:h-[518px]   ">
                <Image
                  src={image.src}
                  alt={image.name}
                  fill
                  className="object-cover rounded-2xl"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

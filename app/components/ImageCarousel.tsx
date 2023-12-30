"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image, { StaticImageData } from "next/image";

type Images = {
  images: StaticImageData[];
};

export default function ImageCarousel({ images }: Images) {
  //const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {images.map((image, key) => {
          return (
            <div className="embla__slide" key={key}>
              <Image
                src={image}
                alt={"title"}
                className="max-h-[600px] object-scale-down"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

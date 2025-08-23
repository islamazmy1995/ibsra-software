import { useState } from "react";

const ImageSlider = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-500">
        No image available
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="w-full h-48 overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-48 overflow-hidden group">
      <img
        src={images[current]}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        →
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              current === i
                ? "bg-white scale-110"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

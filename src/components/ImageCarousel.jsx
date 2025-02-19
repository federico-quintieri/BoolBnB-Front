import { useState } from "react";
import { useGlobalContext } from "./GlobalContext";

function ImageCarousel({ images }) {
  const { apiUrl } = useGlobalContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funzione per andare avanti
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Funzione per tornare indietro
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Immagine */}
      <div className="relative ">
        <img
          src={`${apiUrl}${images[currentIndex]}`}
          alt="immagine carosello"
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Bottone sinistro */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ◀
      </button>

      {/* Bottone destro */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2  bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ▶
      </button>

      {/* Indicatori (pallini sotto) */}
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;

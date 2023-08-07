import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  const [headingSize, setHeadingSize] = useState("text-4xl");

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      setHeadingSize("text-3xl"); // Set smaller heading size for small screens
    } else {
      setHeadingSize("text-4xl"); // Set default heading size for larger screens
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide((prevSlide) =>
        prevSlide === cards.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Adjust the interval duration as needed (in milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [cards]);

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
        marginBottom: 70,
        marginTop: 90,
      }}
    >
      <h1 className={`flex justify-center font-bold py-5 ${headingSize}`}>
        Our Services
      </h1>
      <hr
        style={{ marginBottom: 70 }}
        className="w-24 h-1 mx-auto bg-blue-300"
      />
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        animationConfig={config.gentle}
      />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import img1 from "../assets/home1.png";
import img2 from "../assets/home2.png";
import img3 from "../assets/home3.png";

const AutoSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, img: img1, title: "Modern Interior Design" },
    { id: 2, img: img2, title: "Luxury Living Spaces" },
    { id: 3, img: img3, title: "Creative Architecture" },
  ];

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);

  }, []);

  const styles = {

    container: {
      width: "100%",
      height: "100vh",
      position: "relative",
      overflow: "hidden"
    },

    slide: {
      position: "absolute",
      width: "100%",
      height: "100%",
      transition: "opacity 0.8s ease-in-out"
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },

    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      color: "white",
      textAlign: "center",
      background: "rgba(0,0,0,0.4)",
      padding: "20px 40px",
      borderRadius: "8px"
    },

    title: {
      fontSize: "48px",
      fontWeight: "bold"
    }

  };

  return (

    <div style={styles.container}>

      {slides.map((slide, index) => (

        <div
          key={slide.id}
          style={{
            ...styles.slide,
            opacity: index === currentIndex ? 1 : 0
          }}
        >

          <img src={slide.img} alt="" style={styles.image} />

          <div style={styles.content}>
            <h1 style={styles.title}>{slide.title}</h1>
          </div>

        </div>

      ))}

    </div>

  );

};

export default AutoSlider;
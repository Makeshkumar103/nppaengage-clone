import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    id: 1,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    id: 2,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    id: 3,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

export default function SlidingQuoteBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === quotes.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? quotes.length - 1 : prev - 1
    );
  };

  return (
    <div style={styles.container}>
      <button onClick={prevSlide} style={styles.arrow}>
        <ChevronLeft size={28} />
      </button>

      <div style={styles.slider}>
        <div
          style={{
            ...styles.slides,
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {quotes.map((quote) => (
            <div key={quote.id} style={styles.slide}>
              <p style={styles.text}>“{quote.text}”</p>
              <span style={styles.author}>— {quote.author}</span>
            </div>
          ))}
        </div>
      </div>

      <button onClick={nextSlide} style={styles.arrow}>
        <ChevronRight size={28} />
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "900px",
    margin: "40px auto",
    background: "#0f172a",
    color: "#fff",
    borderRadius: "12px",
    padding: "20px",
    overflow: "hidden",
  },
  slider: {
    overflow: "hidden",
    flex: 1,
  },
  slides: {
    display: "flex",
    transition: "transform 0.6s ease-in-out",
  },
  slide: {
    minWidth: "100%",
    textAlign: "center",
    padding: "20px",
  },
  text: {
    fontSize: "1.2rem",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  author: {
    fontSize: "0.9rem",
    opacity: 0.8,
  },
  arrow: {
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
};

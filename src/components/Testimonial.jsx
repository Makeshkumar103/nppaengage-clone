import "./testimonial.css"
import { motion, transform, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState,useEffect } from "react";

const testimonials = [
    {
        id: 1,
        content:"Your team is so comprehensive and organized. I am very impressed. Thank you all!",
        author: "Medical Education Manager",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 2,
        content:
            "We're excited about our growing partnership!",
        author: "Media Planner",
        
    },
    {
        id: 3,
        content:
            "Was really lovely workinng with you always enjoyed it, you have an excellent model",
        author: "Senior Director, Pharma",
        
    },
    {
        id: 4,
        content:
            "We're all going to need care at some point in our lives. That's why it was important for us to target the healthcare providers who are seeing the majority of patients.",
        author: "Director of Product Development, Cancer Research",
        
    },
    {
        id: 5,
        content:
            "We're excited about our growing partnership!",
        author: "Media Planner",
        
    },
    {
        id: 6,
        content:
            "We're excited about our growing partnership!",
        author: "Media Planner",
        
    },
]
const Testimonial = () => {
    const [curentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [curentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
          prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <section className="container">
        <div className="testimonial">
            <motion.h2 className=""
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay:1}}
            viewport={{ once: true }} 
            >What Our Clients have to Say</motion.h2>
            <div className="flex">
                <button onClick={prevSlide} className="arrow">
                <ChevronLeft size={20} />
                </button>
                <div className="slider">
                    <div className="slides" style={{ transform: `translateX(-${curentIndex * 100}%)` }}
                    >
                       {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id}
                        className="slide"    
                        // style={{ display: index === curentIndex ? 'block' : 'none' }}
                        >
                        <p className="text" >"{testimonial.content}"</p>
                        <p className="author">- {testimonial.author}</p>
                        </div>
                         ))}
                    </div>
                </div>
                <button onClick={nextSlide} className="arrow">
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
        </section>
    );
}

export default Testimonial;
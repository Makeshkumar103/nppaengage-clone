import React from "react";
import "./whyus.css";
import { motion } from "framer-motion";
import img1 from '../assets/photos/why-us-main.webp';
import img2 from '../assets/photos/why-us-left.webp';

export default function WhyUs() {
  return (
    <section className="container content">
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay:1}}
            viewport={{ once: true }} 
            // className="content"
        >
            <h2>WHY US</h2>
            <h3>A Targeted Approach to Pharmaceutical Marketing</h3>
            <p>Nurse practitioners [NPs] and Physician Associates [PAs] have emerged <bold>as influential prescribers, often overlooked</bold> by traditional marketing approaches.</p>
            <ul className="features-list">
                <li>Our focus is on NPs|PAs</li>
                <li>Largest NP|PA Reach and Pinpoint Targeting</li>
                <li>Uncover 3–4x the number of NPs|PAs</li>
                <li>12 Years, 80+ Companies</li>
                <li>Full Spectrum of Offerings</li>
                <li>Relationships with NP|PA Infulencer KOLs</li>
                <li>Nearly 70% of NPs|PAs are specialists within psychiatry, dermatology, oncology and orthopedics (some of their fastest growth fields) while another 200,000+ NPs|PAs are primary care. They’re essential across most fields.</li>
            </ul>
        </motion.div>
        <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay:1}}
        viewport={{ once: true }} 
        className="container whyus-container"
        >
            <img src={img1} alt="Why Us Main" className="whyusmain" />
            
            <div className="whyusleft">
            <img src={img2} alt="Why Us Left" height={90} />
            </div>

            <div className="card">
                <h2>TARGETED MARKETING</h2 >
                <p className="green">600K</p>
                <p>NUmber of Nurse Practitioners and Physician Associates Reached</p>
            </div>
            </motion.div>
    </section>
  );
}

import "./solutions.css";
import { Bold } from "lucide-react";
import pg1 from "../assets/photos/program-1.webp"
import pg2 from "../assets/photos/program-2.webp"
import pg3 from "../assets/photos/program-3.webp"
import pg4 from "../assets/photos/program-4.webp"
import pg5 from "../assets/photos/program-5.webp"
import pg6 from "../assets/photos/program-6.webp"
import React from "react";

const solutions = [
    {
        id:1,
        image:pg1,
        heading:"Data and Targeting",
    },
    {
        id:2,
        image:pg2,
        heading: "Email, eNewsletters",
    },
     {
        id:3,
        image:pg3,
        heading: "Gamified Med-Ed",
    },
    {
        id:4,
        image:pg4,
        heading:  "KOL Peer-to-Peer",
    },
    {
        id:5,
        image:pg5,
        heading: "Microsites and Hubs",
    },
    {
        id:6,
        image:pg6,
        heading: "SMS | Text Campaigns",
    },
];

export default function Solutions() {
  return (
    <section className="container">
      <h2>WHAT WE DO</h2>
      <h4>Programs That Engage</h4>
      <p><b>Our programs are specifically designed to target and enhance engagement with NPs|PAs.</b> Incorporating our insights and proprietary strategies, we reach the largest NP|PA network<b>—to offer you unparalleled access and influence for your brand.</b></p>
      <div className="solutions-grid">
        {solutions.map((item) => (
          <div key={item.id} className="solution-card" style={{backgroundImage:`url(${item.image})`}}>
            <p>{item.heading}</p>
            <button className="btn-secondary">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

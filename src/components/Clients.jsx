import React from "react";
import "./clients.css"
import logos from "../assets/photos/nppaLogoLight.webp";
import l1 from "../assets/logos/allergn.webp";
import l2 from "../assets/logos/ambu.webp";
import l3 from "../assets/logos/amgen.webp";
import l4 from "../assets/logos/arcutis.webp";
import l5 from "../assets/logos/Astellas.webp";
import l6 from "../assets/logos/azurity.webp";
import l7 from "../assets/logos/bayer.webp";
import l8 from "../assets/logos/BMS.webp";
import l9 from "../assets/logos/boston.webp";
import l10 from "../assets/logos/cdc.webp";
import l11 from "../assets/logos/dermavant.webp";
import l12 from "../assets/logos/eisai.webp";
import l13 from "../assets/logos/exact_sciences.webp";


const clientLogos = [
 { id:1,  logos:l1 , alt:"allergn"},
 { id:2,  logos:l2 , alt: "ambu"},
 { id:3,   logos:l3 , alt: "amgen" },
 { id:4,   logos:l4 , alt: "arcuits"},
 { id:5,   logos:l5 , alt: "Astellas"},
 { id:6,   logos:l6 , alt: "azurity"},
 { id:7,   logos:l7 , alt: "bayer"},
 { id:8,   logos:l8 , alt: "BMS"},
 { id:9,   logos:l9 ,  alt: "bostron"},
 { id:10,   logos:l10 , alt: "cdc"},
 { id:11,   logos:l11 , alt: "dermavant"},
 { id:12,   logos:l12 , alt: "eisai"},
 { id:13,   logos:l13 , alt: "exact_sciences"},
];

export default function Clients() {
  return (
    <section className="container">
    <div className="clients">
      <h2>More Happy Clients</h2>
      <div className="brand-banner">
        <div className="brand-track">
        {/* {clientLogos.map((logo) => ( */}
        {[...clientLogos,...clientLogos].map((logo) => (
            <div className="brand-item" key={logo.id}>
          <img
            // key={logo.id}
            src={logo.logos}
            alt={logo.alt}
            width={200}
            height={100}
            loading="lazy"
          />
          </div>
        ))}
        </div>
      </div>
      <div className="cta-button ">
        <button>Learn More | Schedule a Demo</button>
      </div>
    </div>  
    </section>
  );
}

import React from "react";
import bgImage from "../assets/Img/services-bg.png";

// Import each service image properly
import embeddedSystemImg from "../assets/Img/embedded-system.jpg";
import iotSolutionsImg from "../assets/Img/iot-solutions.png";
import pcbFabricationImg from "../assets/Img/pcb-fabrication.png";
import productPrototypingImg from "../assets/Img/product-prototyping.png";
import roboticKitsImg from "../assets/Img/robotic-kits.jpg";
import aiCourseImg from "../assets/Img/ai-course.jpg";

const services = [
  {
    category: "Development",
    items: [
      {
        title: "Embedded System Design",
        desc: "Custom embedded hardware and firmware solutions.",
        img: embeddedSystemImg,
      },
      {
        title: "IoT Solutions",
        desc: "Smart IoT based monitoring and automation systems.",
        img: iotSolutionsImg,
      },
    ],
  },
  {
    category: "Prototyping",
    items: [
      {
        title: "PCB Fabrication",
        desc: "From schematic to prototype board manufacturing.",
        img: pcbFabricationImg,
      },
      {
        title: "Product Prototyping",
        desc: "Turn your idea into a physical working prototype.",
        img: productPrototypingImg,
      },
    ],
  },
  {
    category: "Education",
    items: [
      {
        title: "Custom Robotic Kits",
        desc: "Hands-on robotics kits for learning and innovation.",
        img: roboticKitsImg,
      },
      {
        title: "AI in Embedded Systems",
        desc: "Learn how to integrate artificial intelligence into real-time embedded applications for smarter automation.",
        img: aiCourseImg,
      }      
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 px-6 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/60 p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">Our Services</h2>
        <div className="space-y-12 max-w-5xl mx-auto">
          {services.map((group) => (
            <div key={group.category}>
              <h3 className="text-xl font-semibold mb-4 text-white">{group.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((service, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/90 text-black rounded-lg shadow hover:shadow-lg transition-all flex flex-col"
                  >
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h4 className="text-lg font-bold mb-1">{service.title}</h4>
                    <p className="text-sm text-gray-700 mb-4">{service.desc}</p>
                    <button className="self-start mt-auto bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm py-2 px-4 rounded">
                      Read More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

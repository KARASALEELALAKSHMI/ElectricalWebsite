import React from "react";
import { FaMicrochip, FaRobot, FaTools, FaNetworkWired, FaDraftingCompass } from "react-icons/fa";

const services = [
  {
    category: "Development",
    items: [
      { icon: <FaMicrochip />, title: "Embedded System Design", desc: "Custom embedded hardware & firmware solutions." },
      { icon: <FaNetworkWired />, title: "IoT Solutions", desc: "Smart IoT based monitoring and automation systems." },
    ],
  },
  {
    category: "Prototyping",
    items: [
      { icon: <FaDraftingCompass />, title: "PCB Fabrication", desc: "From schematic to prototype board manufacturing." },
      { icon: <FaTools />, title: "Product Prototyping", desc: "Turn your idea into a physical working prototype." },
    ],
  },
  {
    category: "Education",
    items: [
      { icon: <FaRobot />, title: "Custom Robotic Kits", desc: "Hands-on robotics kits for learning and innovation." },
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="space-y-12 max-w-5xl mx-auto">
        {services.map((group) => (
          <div key={group.category}>
            <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {group.items.map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-2 text-blue-600">{service.icon}</div>
                  <h4 className="text-lg font-bold">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

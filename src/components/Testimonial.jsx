import React from "react";
import Card from "./ServiceComponent/Card";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
const testimonials = [
  {
    name: "Jane Doe",
    designation: "CEO at Example Co.",
    quote: "This product completely changed the way we work!",
    src: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "John Smith",
    designation: "CTO at Startup Inc.",
    quote: "Exceptional results and outstanding support.",
    src: "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "John Smith",
    designation: "CTO at Startup Inc.",
    quote: "Exceptional results and outstanding support.",
    src: "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "John Smith",
    designation: "CTO at Startup Inc.",
    quote: "Exceptional results and outstanding support.",
    src: "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Testimonial = () => {
  return (
    <div className="mx-auto px-6 py-32 h-screen bg-white" id="service">
      <h1 className="text-4xl md:text-7xl font-bold text-center text-gray-800">
        Testimonials
      </h1>

      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </div>
  );
};

export default Testimonial;

// deployment and maintainance.
// Saas product development.
// Web development
// Ui ux

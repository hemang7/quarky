import React from "react";
import contact from "../assets/contact.jpg";
import Faq from "../components/Faq";

const Contact = () => {
  const faqs = [
    {
      q: " What services do we offer?",
      a: "We offer a wide range of consultancy services in areas such as optimization, product development, quality control, and regulatory compliance.",
      expanded: true,
    },
    {
      q: "How can I schedule a consultation?",
      a: "You can schedule a consultation by contacting us through phone or email. Our team will assist you in setting up a convenient time.",
    },
    {
      q: "What are your areas of expertise?",
      a: "We specialize in providing consultancy services in areas such as process optimization, product development, quality control, and regulatory compliance.",
    },
    {
      q: "Do you provide assistance in obtaining regulatory approvals for products?",
      a: "Yes, we have expertise in navigating the regulatory landscape and can support you in obtaining necessary approvals and certifications for your products, including compliance with safety and labeling requirements.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8" style={{ marginBottom: 150 }}>
      <div className="flex justify-center">
        <img
          src={contact}
          alt="Contact"
          className="rounded-md object-cover h-64 sm:h-80 md:h-96 lg:h-120"
        />
      </div>
      <div className="flex flex-col md:flex-row mt-12 bg-gray-900 rounded-md p-10">
        <div className="md:w-1/2 flex justify-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">
              Our Address
            </h2>
            <p className="text-gray-300">123 Main Street</p>
            <p className="text-gray-300">Jodhpur, Rajasthan</p>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8 flex justify-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-200">
              Contact Information
            </h2>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
            <p className="text-gray-300">Email: example@example.com</p>
          </div>
        </div>
      </div>
      <div className="m-8">
        <Faq faqs={faqs} defaultAllExpanded={false} />
      </div>
    </div>
  );
};

export default Contact;

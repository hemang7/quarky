import React, { useRef, useState } from "react";
import contact from "../assets/contact.jpg";
import Faq from "../components/Faq";
import emailjs from "emailjs-com";
import { useToast } from "@chakra-ui/react";

const Contact = () => {
  const form = useRef();
  const toast = useToast();

  const validateForm = () => {
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();
    let formIsValid = true;
    const newErrors = {};

    // Name validation
    if (!name) {
      toast({
        title: "Error",
        description: "Please enter your name.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      formIsValid = false;
    }

    // Email validation
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: "Error",
        description: "Email is invalid.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      formIsValid = false;
    }

    // Message validation
    if (!message) {
      toast({
        title: "Error",
        description: "Message is required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      formIsValid = false;
    }

    return formIsValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_4ayasi7",
          "template_fehl4rg",
          form.current,
          "S5aRZd3ms3a8WGUnm"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            toast({
              title: "Thank you!",
              description: "We'll get in touch with you shortly.",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const faqs = [
    {
      q: "What services do we offer?",
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
          style={{ marginBottom: 100 }}
        />
      </div>
      <div className="flex flex-col md:flex-row mt-12 bg-blue-800 rounded-md p-10">
        <div className="md:w-1/2 md:ml-8 flex justify-center md:order-2">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Quark Consultancy Services
            </h2>
            <p className="text-white">quarkcs0702@gmail.com</p>
            <p className="text-white">123456789</p>
          </div>
        </div>
        <div className="md:w-1/2 md:mr-8 flex justify-center md:order-1">
          <form onSubmit={sendEmail} ref={form} className="w-full">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
            <div className="mb-6">
              <label htmlFor="name" className="text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="px-4 py-2 mt-2 rounded-md text-black w-full focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="px-4 py-2 mt-2 rounded-md text-black w-full focus:outline-none"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="px-4 py-2 mt-2 rounded-md text-black w-full focus:outline-none"
              ></textarea>
            </div>
            <div className="mb-6">
              <label htmlFor="attachment" className="text-white">
                Attachment
              </label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                className="text-white p-3 "
              />
            </div>
            <button
              type="submit"
              value="Send"
              className="bg-blue-600 text-white w-full md:w-1/4 px-4 py-2 rounded-lg hover:bg-blue-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="m-8">
        <Faq faqs={faqs} defaultAllExpanded={false} />
      </div>
    </div>
  );
};

export default Contact;

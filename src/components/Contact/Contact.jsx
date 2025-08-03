import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "94f90c9a-224b-4ece-b4ae-83319f0235cb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12" id="contact">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1dd1a1] via-[#5f27cd] to-[#341f97]">
            touch
          </span>
        </h1>
        <div className="w-24 h-2 bg-gradient-to-r from-teal-400 via-purple-500 to-teal-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Contact Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#1dd1a1] via-[#5f27cd] to-[#341f97] bg-clip-text text-transparent">
              Let's talk
            </span>
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl text-teal-400" />
              <p>dhantolekrutika66@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl text-teal-400" />
              <p>+91-6265442226</p>
              <p>+91-8823827557</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl text-teal-400" />
              <p>Bangalore,Karnataka, India</p>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md bg-[#1E1E2F] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md bg-[#1E1E2F] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Enter your message"
              className="w-full px-4 py-3 rounded-md bg-[#1E1E2F] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-400 to-purple-500 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

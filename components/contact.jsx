import React, { useState } from "react";

function Contact() {
  const [mail, setMail] = useState("");
  const [file, setFile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify({ mail, subject, message }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  };

  return (
    <div>
      <section id="contact" className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-bold text-center">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setMail(e.target.value)}
                className="c-input shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   "
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="cv" className="block mb-2 text-sm font-medium">
                Upload your cv
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => setFile(e.target.files)}
                className="c-input shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5   "
                placeholder="example.pdf"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                onChange={(e) => setSubject(e.target.value)}
                className="c-input block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm  "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm rounded-lg resize-none c-input"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm bg-[#485ED8] rounded-md"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;

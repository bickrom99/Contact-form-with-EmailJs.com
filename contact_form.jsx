import emailjs from '@emailjs/browser'; // Correct import for EmailJS
import { useRef, useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  // useRef for form reference
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vdq7wah', // Your Service ID
        'template_ur8ln0y', // Your Template ID
        form.current, // Form reference
        {
          publicKey: '_-arK-pJ65hVEcxoC', // Public Key from EmailJS
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setStatus("Your message has been sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );

    // Reset form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setService("");
    setCountry("");
    setMessage("");
  };

  return (
    <div className="bg-gradient-to-b from-[#E8F9FE] via-[#dff6fd] to-[#E8F9FE] dark:from-[#1A1A1A] dark:via-[#2D2D2D] dark:to-[#3A3A3A] transition-all duration-300 min-h-screen">
      <div className="w-[90%] m-auto flex flex-row justify-between gap-x-4">
        <div className="w-full m-auto">
          <h2 className="text-center text-4xl font-iner font-semibold pb-4">Contact Me</h2>
          <form
            ref={form}
            className="w-full bg-gradient-to-t from-[#89b0f961] via-[#19c7e65d] to-[#89b0f944] py-6 px-6 rounded"
            onSubmit={sendEmail}
          >
            {/* Name */}
            <div className="pb-4">
              <input
                className="contact-input"
                type="text"
                name="name" // Make sure this matches the template
                value={name}
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Phone & Email */}
            <div className="flex flex-row gap-x-4 justify-between pb-4">
              {/* Phone */}
              <input
                className="contact-input"
                type="number"
                name="phone" // Make sure this matches the template
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {/* Email */}
              <input
                className="contact-input"
                type="email"
                name="email" // Make sure this matches the template
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Option & Country */}
            <div className="flex flex-row justify-between gap-x-4 pb-4">
              <select
                name="service" // Make sure this matches the template
                className="contact-input"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
              >
                <option value="">Select Service</option>
                <option value="Web development">Web Development</option>
                <option value="Web design">Web Design</option>
                <option value="Web bug fix">Web Bug Fix</option>
              </select>

              {/* Country */}
              <input
                type="text"
                name="country" // Make sure this matches the template
                className="contact-input"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>

            {/* Message */}
            <div className="pb-4">
              <textarea
                name="message" // Make sure this matches the template
                className="contact-input"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-2 font-inter rounded transition-transform duration-300 hover:scale-105 hover:bg-blue-500"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-green-500">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;

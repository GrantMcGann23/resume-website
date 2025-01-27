import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://grant-mcgann-13d3d1c0d8e2.herokuapp.com/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div className="container">
        {/* Contact Title */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>CONTACT</h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#FFD700",
              margin: "0.5rem auto",
            }}
          ></div>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", color: "#CCC" }}>
            Feel free to contact me by submitting the form below. I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <div
          style={{
            backgroundColor: "#2A2A2A", // Soft dark gray
            borderRadius: "8px",
            padding: "2rem",
            maxWidth: "600px",
            margin: "0 auto",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.4)", // Subtle shadow
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "white",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "4px",
                  border: "1px solid #444", // Subtle border
                  fontSize: "1rem",
                  backgroundColor: "#3A3A3A",
                  color: "white",
                }}
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "white",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "4px",
                  border: "1px solid #444", // Subtle border
                  fontSize: "1rem",
                  backgroundColor: "#3A3A3A",
                  color: "white",
                }}
              />
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "white",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                style={{
                  width: "100%",
                  padding: "0.8rem",
                  borderRadius: "4px",
                  border: "1px solid #444", // Subtle border
                  fontSize: "1rem",
                  backgroundColor: "#3A3A3A",
                  color: "white",
                }}
              ></textarea>
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: "#FFD700",
                  color: "black",
                  padding: "0.8rem 2rem",
                  borderRadius: "4px",
                  border: "none",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#E6C200")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFD700")}
              >
                Submit
              </button>
            </div>
          </form>
          {status && (
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                color: status.includes("success") ? "green" : "red",
              }}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

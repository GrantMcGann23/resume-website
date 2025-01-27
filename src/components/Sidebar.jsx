import { useState } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "20px",
            transform: "translateY(-50%)",
            zIndex: "10",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
          >
            {/* LinkedIn */}
            <li style={{ marginBottom: "15px" }}>
              <a
                href="https://www.linkedin.com/in/grant-mcgann-876573317/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  color: "white",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  backgroundColor: "#0077b5", // LinkedIn Blue
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  lineHeight: "50px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.2)";
                  e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>

            {/* GitHub */}
            <li style={{ marginBottom: "15px" }}>
              <a
                href="https://github.com/GrantMcGann23"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  color: "white",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  backgroundColor: "#333", // GitHub Dark
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  lineHeight: "50px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.2)";
                  e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>

            {/* Email */}
            <li style={{ marginBottom: "15px" }}>
              <a
                href="mailto:mcganngrant@gmail.com"
                style={{
                  display: "block",
                  color: "white",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  backgroundColor: "#d44638", // Email Red
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  lineHeight: "50px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.2)";
                  e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Hide/Show Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          left: "20px", // Matches left alignment of icons
          top: "calc(50% + 95px)", // Adjusted to align perfectly below the last icon
          zIndex: "11",
          backgroundColor: "black",
          color: "white",
          border: "2px solid white",
          borderRadius: "50%",
          width: "50px", // Same size as other icons
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "scale(1.2)";
          e.target.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "none";
        }}
      >
        {isSidebarOpen ? (
          <i className="fas fa-chevron-left"></i>
        ) : (
          <i className="fas fa-chevron-right"></i>
        )}
      </button>
    </>
  );
}

import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Toggle Button (always visible on mobile) */}
      <button
        onClick={toggleSidebar}
        style={{
          position: "fixed",
          left: isMobile ? "10px" : "20px",
          bottom: isMobile ? "10px" : "auto",
          top: isMobile ? "auto" : "calc(50% + 95px)",
          zIndex: "11",
          backgroundColor: "black",
          color: "white",
          border: "2px solid white",
          borderRadius: "50%",
          width: "50px",
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

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          style={{
            position: "fixed",
            left: isMobile ? "0" : "20px",
            bottom: isMobile ? "10px" : "auto",
            top: isMobile ? "auto" : "50%",
            transform: isMobile ? "none" : "translateY(-50%)",
            zIndex: "10",
            display: "flex",
            flexDirection: isMobile ? "row" : "column",
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "center" : "unset",
            backgroundColor: "transparent",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "flex",
              flexDirection: isMobile ? "row" : "column",
              alignItems: "center",
            }}
          >
            {/* LinkedIn */}
            <li style={{ margin: isMobile ? "0 10px" : "0 0 15px 0" }}>
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
            <li style={{ margin: isMobile ? "0 10px" : "0 0 15px 0" }}>
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
            <li style={{ margin: isMobile ? "0 10px" : "0 0 15px 0" }}>
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
    </>
  );
}

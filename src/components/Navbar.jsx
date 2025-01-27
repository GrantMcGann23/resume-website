import { useState, useEffect } from "react";

export default function Navbar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Monitor screen size changes
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 992; // Bootstrap's "lg" breakpoint
      setIsSmallScreen(smallScreen);

      if (!smallScreen) {
        setIsMenuOpen(false); // Ensure dropdown closes on larger screens
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize); // Listen for resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: "rgba(0, 0, 0, 0.5)",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        transition: "background-color 0.3s ease", // Smooth background transition
      }}
    >
      <div className="container-fluid">
        {/* Profile Photo and Name */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#hero"
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          <img
            src="/assets/profile-photo.jpeg" // Path to your profile photo
            alt="Grant McGann"
            className="rounded-circle"
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              border: "2px solid white",
            }}
          />
          <span className="text-white">Grant McGann</span>
        </a>

        {/* Toggler (Hamburger Icon) */}
        {isSmallScreen && (
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            style={{
              border: "none",
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "24px",
            }}
          >
            <span
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "white",
                borderRadius: "2px",
                transition: "transform 0.2s ease-in-out",
              }}
            ></span>
            <span
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "white",
                borderRadius: "2px",
                transition: "transform 0.2s ease-in-out",
              }}
            ></span>
            <span
              style={{
                width: "30px",
                height: "3px",
                backgroundColor: "white",
                borderRadius: "2px",
                transition: "transform 0.2s ease-in-out",
              }}
            ></span>
          </button>
        )}

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
          style={{
            transition: "all 0.3s ease-in-out", // Smooth dropdown animation
          }}
        >
          <ul
            className={`navbar-nav ms-auto ${
              !isSmallScreen ? "d-flex" : ""
            }`} // Always show links on large screens
            style={{
              paddingLeft: isSmallScreen ? "60px" : "0", // Align dropdown links with "G" in Grant
              marginTop: isSmallScreen ? "5px" : "0", // Reduced spacing from your name
            }}
          >
            <li className="nav-item mb-1">
              <a
                className="nav-link"
                href="#about"
                onClick={isSmallScreen ? closeMenu : null} // Close menu when link clicked on small screens
                style={{
                  color: "#FFD700", // Gold color for dropdown links
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "transform 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.color = "#FFFFFF"; // Change to white on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.color = "#FFD700"; // Revert back to gold
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item mb-1">
              <a
                className="nav-link"
                href="#projects"
                onClick={isSmallScreen ? closeMenu : null} // Close menu when link clicked
                style={{
                  color: "#FFD700",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "transform 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.color = "#FFD700";
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={isSmallScreen ? closeMenu : null} // Close menu when link clicked
                style={{
                  color: "#FFD700",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "transform 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.color = "#FFD700";
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

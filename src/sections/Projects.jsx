export default function Projects() {
    return (
      <section
        id="projects"
        style={{
          height: "auto", // Allow the section to grow as needed
          padding: "4rem 2rem",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div className="container text-center">
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#FFD700" }}>
            My Projects
          </h2>
  
          {/* Project 1: Expedia Chrome Extension */}
          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
              Expedia Chrome Extension (Senior Capstone Project)
            </h3>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "1rem" }}>
              • Collaborated with a team of 6 students and Expedia to develop a Chrome
              extension utilizing OpenAI’s GPT to rate VRBO and other vacation rental
              listings on a 1-100 scale. Focused on evaluating listing descriptions for
              persuasiveness, appropriate amenities, and other relevant factors (such as
              quality of photos).
              <br />
              • Successfully completed the API as a service and handed off the product on
              time. Presented the final product to Expedia's executive members at their
              Denver office. Received positive feedback from Expedia for our teamwork and
              presentation skills.
            </p>
            {/* Demo Video */}
            <div>
              <video
                controls
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  border: "2px solid #FFD700",
                  borderRadius: "8px",
                }}
              >
                <source src="/assets/ListingLensDemo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
  
          {/* Project 2: Ray Tracing Project */}
          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Ray Tracing Project</h3>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "1rem" }}>
              Developed a ray tracing application in C++ that renders realistic 3D images
              by simulating the behavior of light rays. Implemented complex algorithms for
              reflection, refraction, and shading to create visually accurate scenes.
              <br />
              <a
                href="https://github.com/GrantMcGann23/RayTracing/tree/main/RayTrace%202/src"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#FFD700",
                  textDecoration: "none",
                }}
              >
                View GitHub Repository
              </a>
            </p>
            {/* Ray Tracing Image */}
            <div>
              <img
                src="/assets/changed_image.png"
                alt="Ray Tracing Final Image"
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  border: "2px solid #FFD700",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>

          {/* Project: Algo Arcade */}
          <div style={{ marginBottom: "3rem" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
              Algorithm Arcade
            </h3>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "1rem" }}>
              Interactive algorithm visualization platform built with React, Three.js, and TypeScript.
              Features real-time sorting comparisons, binary tree exploration, and weighted graph pathfinding.
              <br />
              <a
                href="https://github.com/GrantMcGann23/algo-arcade"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#FFD700",
                  textDecoration: "none",
                  marginRight: "1rem"
                }}
              >
                View GitHub Repository
              </a>
            </p>
            <div>
              <a
                href="https://algo-arcade-6k0ltjz23-grantmcgann23s-projects.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/algo-arcade-preview.png"
                  alt="Algo Arcade Preview"
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                    border: "2px solid #FFD700",
                    borderRadius: "8px",
                    transition: "transform 0.2s ease-in-out",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.02)"}
                  onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

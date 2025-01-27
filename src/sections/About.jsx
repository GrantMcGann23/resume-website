export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "4rem 2rem",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div className="container">
        {/* About Me Title */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>ABOUT ME</h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              backgroundColor: "#FFD700",
              margin: "0.5rem auto",
            }}
          ></div>
          <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto", color: "#CCC" }}>
            Learn more about my education, skills, and professional interests in software
            engineering and web development.
          </p>
        </div>

        {/* About Content */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "flex-start",
          }}
        >
          {/* Left Column - Education and Skills */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Education</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#CCC" }}>
              <strong style={{ color: "#FFD700" }}>University of Colorado</strong>
              <br />
              Bachelor of Science in Computer Science
            </p>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#CCC", marginTop: "0.5rem" }}>
              <strong style={{ color: "#FFD700" }}>Relevant Coursework:</strong>
              <br />
              Data Structures, Algorithms, Database Systems, Software Development Methods, Universal Design for Digital Media, 
              Human-Computer Interaction, High Performance Scientific Computing, and Numerical Computation.
            </p>

            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem", marginTop: "2rem" }}>Technical Skills</h3>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                color: "#CCC",
                fontSize: "1rem",
              }}
            >
              <li>Proficient in: C++, Java, JavaScript, Python</li>
              <li>Web Development: React, Node.js, UI/UX</li>
              <li>Database Management: MongoDB, SQL, PostgreSQL</li>
              <li>Data Science Tools: NumPy, Pandas</li>
            </ul>
          </div>

          {/* Right Column - My Skills (Tags) */}
          <div style={{ flex: "1", minWidth: "300px" }}>
            <h3 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Core Competencies</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {[
                "C++",
                "Java",
                "JavaScript",
                "Python",
                "React",
                "Node.js",
                "MongoDB",
                "SQL",
                "PostgreSQL",
                "NumPy",
                "Pandas",
                "UI/UX",
              ].map((skill, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#333",
                    borderRadius: "5px",
                    fontSize: "1rem",
                    color: "white",
                    fontWeight: "500",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

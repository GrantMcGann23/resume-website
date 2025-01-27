export default function Footer() {
    return (
      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          padding: "2rem 1rem",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
            Grant McGann
          </h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", maxWidth: "500px", margin: "0 auto" }}>
            A passionate developer creating modern, responsive, and user-friendly web applications.
          </p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              listStyle: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {/* LinkedIn */}
            <li style={{ margin: "0 10px" }}>
              <a
                href="https://www.linkedin.com/in/grant-mcgann-876573317/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  textDecoration: "none",
                }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
  
            {/* GitHub */}
            <li style={{ margin: "0 10px" }}>
              <a
                href="https://github.com/GrantMcGann23"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  textDecoration: "none",
                }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
  
            {/* Email */}
            <li style={{ margin: "0 10px" }}>
              <a
                href="mailto:mcganngrant@gmail.com"
                style={{
                  color: "white",
                  fontSize: "1.5rem",
                  textDecoration: "none",
                }}
              >
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
          &copy; {new Date().getFullYear()} . Made by Grant McGann
        </div>
      </footer>
    );
  }
  
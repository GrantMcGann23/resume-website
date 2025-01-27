export default function Hero() {
  return (
    <header
      id="hero"
      className="d-flex align-items-center justify-content-center vh-100 text-center text-white bg-dark position-relative"
      style={{
        backgroundImage: "url('/assets/laptop-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Reduced Black Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", top: 0, left: 0 }}
      ></div>

      <div className="container position-relative">
        <h1 className="display-4 fw-bold">
          Hi, I'm <span className="text-warning">Grant McGann</span>
        </h1>
        <p className="lead">
          A passionate developer creating modern, responsive, and user-friendly web applications.
        </p>
        <a href="#projects" className="btn btn-warning btn-lg mt-3">
          View My Work
        </a>
      </div>

      {/* Scroll Prompt */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "20px", // Smaller width
            height: "30px", // Smaller height
            border: "2px solid white",
            borderRadius: "15px", // Smaller border-radius
            position: "relative",
          }}
        >
          <div
            style={{
              width: "6px", // Smaller inner dot
              height: "6px", // Smaller inner dot
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              top: "5px",
              left: "50%",
              transform: "translateX(-50%)",
              animation: "scrollAnimation 2s infinite",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}

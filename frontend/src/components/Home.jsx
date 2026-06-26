import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Complaint Management System</h1>

        <p>
          Submit, Track, and Manage Complaints Easily.
          A simple and efficient platform for handling complaints.
        </p>

        <div className="hero-buttons">
          <Link to="/register">
            <button className="btn-primary">
              Register
            </button>
          </Link>

          <Link to="/login">
            <button className="btn-secondary">
              Login
            </button>
          </Link>

          <Link to="/complaint">
            <button className="btn-complaint">
              Submit Complaint
            </button>
          </Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>📝 Easy Complaint Submission</h3>
          <p>
            Submit complaints quickly with a simple form.
          </p>
        </div>

        <div className="feature-card">
          <h3>📊 Track Status</h3>
          <p>
            Monitor complaint status in real time.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure System</h3>
          <p>
            Your complaint data is stored securely.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
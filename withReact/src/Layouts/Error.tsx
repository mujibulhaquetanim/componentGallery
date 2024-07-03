import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
      <p>Redirecting to home page in {countdown} seconds...</p>
    </div>
  );
}

export default ErrorPage;

import React from "react";

function ErrorPage() {
  {
    setTimeout(() => {
      window.location.href = "/";
    }, 3000);
  }
  return (
    <div className="h-screen grid place-items-center">
      <div className="text-3xl font-bold">
        {" "}
        Are you lost?
        <p>Redirecting you to home page in 3 seconds</p>
      </div>
    </div>
  );
}

export default ErrorPage;

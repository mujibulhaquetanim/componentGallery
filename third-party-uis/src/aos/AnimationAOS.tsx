function AnimationAOS() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div
        className="w-1/2 mt-4 bg-red-500 flex justify-center items-center gap-1 border-2 p-2"
        data-aos="flip-left"
        data-aos-ease="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div style={{ backgroundColor: "green", marginTop: "16px" }}>
          Flip Left
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="3000">
        Fade Up
      </div>

      <button
        data-aos="zoom-in"
        data-aos-duration="3000"
        style={{ padding: "16px" }}
      >
        Click me
      </button>
    </div>
  );
}

export default AnimationAOS;

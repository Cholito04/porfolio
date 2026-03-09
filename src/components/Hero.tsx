function Hero() {
  return (
    <div
      id="Hero"
      className="w-full lg:px-4 px-10 py-20 mx-auto text-white text-center"
    >
      <div className="mx-auto lg:max-w-310 max-w-200 bg-neutral-800 p-20 rounded-4xl shadow-2xl">
        <h1 className="lg:text-6xl md:text-5xl text-3xl font-extrabold tracking-tight">
          Mauricio
          <br />
          <span className="text-sky-900">Mancera-Bohorquez</span>
        </h1>
        <p className="md:text-xl sm:text-lg py-4">
          CS @ Western Michigan University · Building full stack applications
          with Python, React, and machine learning. Passionate about turning
          data into useful products.
        </p>
      </div>
    </div>
  );
}

export default Hero;

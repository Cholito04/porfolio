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
          <span className="bg-linear-to-b from-sky-200 to-sky-800 bg-clip-text text-transparent">
            Mancera-Bohorquez
          </span>
        </h1>
        <p className="md:text-xl sm:text-l py-4">
          CS @ Western Michigan University | I build clean, interactive web
          application using modern web tools.
        </p>
      </div>
    </div>
  );
}

export default Hero;

function Freelance() {
  return (
    <div
      id="Freelance"
      className=" w-full py-16 px-4 text-white bg-repeat-round "
    >
      <div className="max-w-310 -mt-10 w-full mx-auto text-center justify-center lg:px-1">
        <h1 className="lg:text-6xl md:text-5xl text-3xl font-extrabold tracking-tight md:py-4">
          Freelance Work
        </h1>
        <div className="w-full py-10 lg:max-w-100 max-w-130 mx-auto gap-8">
          {/* project 1 card */}

          <div className="bg-sky-950 w-full shadow-xl flex flex-col p-4 my-4 rounded-2xl md:hover:scale-105 duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-center py-8">
              The Marshawn Kneeland Foundation
            </h2>

            <p className="text-center text-xl font-light">
              Built and deployed a full production website for a non-profit
              foundation.
            </p>
            <p className="text-center text-sm text-gray-400 mb-4">
              Non-profit foundation · Solo developer · 2026
            </p>
            <div className="text-center text-sm">
              <p className="py-2 border-b mx-8 mt-8">
                React · TypeScript · Tailwind · Vite
              </p>
              <p className="py-2 border-b mx-8"> EmailJS · React Router</p>
              <p className="py-2 border-b mx-8">
                Deployed on Vercel · Custom Domain & DNS
              </p>
              <p className="py-2 border-b mx-8">
                SEO setup · Google Search Console
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://www.marshawnkneelandfoundation.org"
                target="_blank"
                className="h-[60-px] px-6 py-3 rounded-md bg-neutral-700 hover:bg-neutral-500 transition"
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Freelance;

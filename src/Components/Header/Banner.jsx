const Banner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-3/4 mx-auto flex flex-col gap-9 text-center">
        <h1 className="text-5xl md:text-8xl font-bold">Hi. I'm Sabbir</h1>
        <h2 className="text-3xl md:text-5xl font-black">
          Software Development Engineer
        </h2>
        <p className="md:font-semibold text-xs/loose md:text-sm/loose pt-16 w-3/4 mx-auto text-zinc-400/50">
          I'm dedicated to creating responsive interfaces. Enthusiastic about
          clean code and contributing to innovative open-source projects.
        </p>
      </div>
    </div>
  );
};

export default Banner;

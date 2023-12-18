import featPhoto from "/Resources/dev.png";

function AboutMe() {
  return (
    <section className="my-7">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-11 bg-blue-300/10">
        <div className="flex-1">
          <div className="w-full md:w-3/4 mx-autoflex items-center justify-center">
            <img src={featPhoto} alt="Featured" className="w-full" />
          </div>
        </div>
        <div className="flex-1 text-left p-10">
          <h2 className="text-3xl font-bold md:text-4xl py-5">
            A passionate Software Engineer.
          </h2>
          <p className="text-sm font-semibold mb-8 flex flex-col gap-7 text-zinc-700/90">
            <p>
              I’m currently working on React front-end projects, weaving
              together polished user interfaces with the power of Tailwind CSS,
              DaisyUI, Firebase, MongoDB, and deploying on Vercel. Passionate
              about leveraging these technologies to create dynamic and
              efficient web applications.
            </p>{" "}
            <p>
              Diving into the world of web development, I'm currently mastering
              Material-UI for sleek interfaces, exploring the depths of MongoDB
              with Mongoose for robust data handling, and honing my skills in
              Node.js and Next.js for server-side and frontend magic. Excited
              about the journey of building scalable and efficient applications
              with these cutting-edge technologies!
            </p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

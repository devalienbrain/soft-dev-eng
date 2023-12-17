import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Header/Banner";
import About from "../About/About";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Use useEffect to initialize Typewriter after component mount
    const typewriterElement = document.getElementById("typewriter");

    if (typewriterElement) {
      new Typewriter(typewriterElement, {
        strings: ["welcome to my profile!", "please contact if any query."],
        autoStart: true,
      });
    }
  }, []);
  return (
    <div>
      <Helmet>
        <title>Sabbir | Home</title>
      </Helmet>
      <Banner></Banner>
      <div
        id="typewriter"
        className="py-9 text-2xl font-bold text-green-400/50"
      ></div>
      <About></About>
    </div>
  );
};

export default Home;

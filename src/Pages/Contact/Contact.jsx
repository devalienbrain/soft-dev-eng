import { useRef } from "react";
import emailjs from "@emailjs/browser";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const title = "Contact me.";
  const subTitle =
    "Results-driven professional. Skilled in fron-end development. Eager to bring innovation and drive success. Please connect and send your message.";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dcu6k55",
        "template_vf19dpu",
        form.current,
        "ILXv8meX2_amnqjVf"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Nice! thanks for contacting me.");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <Helmet>
        <title>Sabbir | Contact</title>
      </Helmet>
      <ToastContainer></ToastContainer>
      <PageTitle title={title} subTitle={subTitle}></PageTitle>

      <div className="flex justify-center items-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-9 bg-zinc-950/10 rounded-xl shadow-xl p-10"
        >
          <label>Your name</label>
          <input
            type="text"
            name="user_name"
            className="text-black rounded-sm"
          />
          <label>Your email</label>
          <input
            type="email"
            name="user_email"
            className="text-black rounded-sm"
          />
          <label>Write your message here</label>
          <textarea name="message" className="text-black rounded-md" />
          <input
            type="submit"
            value="Send"
            className="p-3 bg-white/5 rounded-lg text-green-400 hover:text-green-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;

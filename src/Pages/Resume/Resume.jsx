import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";
import screenshot from "../../../public/Resources/resume.jpg";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  const title = "Resume.";
  const subTitle =
    "Feel free to skip the download button and dive straight into the awesomeness that is my professional summary. It's like the golden nugget of my career story – compact, compelling, and ready to make a lasting impression. Let's make this journey through my skills and achievements a memorable one!.";
  const cvDownloadLink =
    "https://drive.google.com/uc?export=download&id=1NaKFbDg-tRJdA_TmnNz697sOZQuxa0_8";

  return (
    <div>
      <Helmet>
        <title>Sabbir | Resume</title>
      </Helmet>
      <PageTitle title={title} subTitle={subTitle}></PageTitle>
      <div className="flex flex-col justify-center items-center rounded-md bg-green-50/10 p-5">
        <div className="rounded-md">
          <img
            className="rounded-md"
            src={screenshot}
            alt="resume screenshot"
          />
        </div>
        <div className="flex flex-col gap-10 py-5 w-full mx-auto">
          <a
            href={cvDownloadLink}
            className="btn bg-white text-green-800 hover:text-green-900"
          >
            Download my resume <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;

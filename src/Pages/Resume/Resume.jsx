import { Helmet } from "react-helmet-async";
import PageTitle from "../../Components/PageTitle/PageTitle";

const Resume = () => {
  const title = "Resume.";
  const subTitle =
    "Feel free to skip the download button and dive straight into the awesomeness that is my professional summary. It's like the golden nugget of my career story – compact, compelling, and ready to make a lasting impression. Let's make this journey through my skills and achievements a memorable one!.";
  const cvDownloadLink =
    "https://drive.google.com/uc?export=download&id=1ju22iiK1HEU-B1W8Pn1CKIC1DBM7lhtt";
  const cvGoogleDriveLink =
    "https://drive.google.com/file/d/1ju22iiK1HEU-B1W8Pn1CKIC1DBM7lhtt/view?usp=sharing";
  return (
    <div>
      <Helmet>
        <title>Sabbir | Resume</title>
      </Helmet>
      <PageTitle title={title} subTitle={subTitle}></PageTitle>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-10 p-5 w-full md:w-2/4 mx-auto rounded-md bg-green-50/10">
          <a
            href={cvGoogleDriveLink}
            target="_blanc"
            className="hover:underline"
          >
            Click to view my resume.
          </a>

          <div className="divider"> Or, </div>
          <a
            href={cvDownloadLink}
            className="btn bg-white text-green-800 hover:text-green-900"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;

import PageTitle from "../../Components/PageTitle/PageTitle";
import exp from "../../../public/Resources/work.png";

const Experience = () => {
  const title = "Experience.";
  const subTitle = "Professional Journey and Work Accomplishments";
  return (
    <section className="my-7">
      <PageTitle title={title} subTitle={subTitle}></PageTitle>
      <div className="container mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-11">
        <div className="flex-1">
          <div className="w-full md:w-3/4 mx-auto flex items-center justify-center">
            <img src={exp} alt="Featured" className="w-full" />
          </div>
        </div>
        <div className="flex-1 text-left">
          <div className="my-10">
            <section className="p-5">
              <div className="flex flex-col gap-5">
                <div className="divider divider-success w-1/4 "></div>
                <h5 className="font-medium text-lg">Working as</h5>
                <h2 className=" font-extrabold text-xl">
                  Assistant Director (IT)
                </h2>
                <h2 className="text-green-300/25 font-bold text-lg">
                  <p>Department of ICT</p>
                  <p>ICT Division</p>
                  <p>Ministry of Post, Telecommunication & IT</p>
                </h2>
                <h2 className=" font-bold text-sm">
                  Job Duration: 2016 - present
                </h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import PageTitle from "../../Components/PageTitle/PageTitle";
import edu from "../../../public/Resources/edu.png";

const Education = () => {
  const title = "Education.";
  const subTitle = "My Academic Achievements and Qualifications";

  return (
    <section className="my-7">
      <PageTitle title={title} subTitle={subTitle}></PageTitle>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-11">
        <div className="flex-1">
          <div className="w-full md:w-3/4 mx-auto flex items-center justify-center">
            <img src={edu} alt="Featured" className="w-full" />
          </div>
        </div>
        <div className="flex-1 text-left">
          <div className="my-10">
            <section className="p-5">
              <div className="flex flex-col gap-5">
                <div className="divider divider-success w-1/4 "></div>
                <h5 className="font-medium text-lg">Bachelor in</h5>
                <h2 className="font-extrabold text-xl">
                  Computer Science & Engineering
                </h2>
                <h2 className="font-bold text-lg text-green-300/25">
                  University of Dhaka
                </h2>
                <h2 className="font-bold text-sm">Passing year: 2012</h2>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

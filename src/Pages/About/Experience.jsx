import PageTitle from "../../Components/PageTitle/PageTitle";

const Experience = () => {
  const title = "Experience.";
  const subTitle = "Professional Journey and Work Accomplishments";
  return (
    <div className="my-10">
      <PageTitle title={title} subTitle={subTitle}></PageTitle>
      <section className="p-5">
        <div className="flex flex-col gap-5">
          <div className="divider divider-success w-1/4 mx-auto"></div>
          <h5 className="font-medium text-lg">Working as</h5>
          <h2 className=" font-extrabold text-xl">
            Software Developement Engineer
          </h2>
          <h2 className="text-green-300/25 font-bold text-lg">
            SRDL Project, ICT Division
          </h2>
          <h2 className=" font-bold text-sm">Job tenure: 1 yrs+</h2>
        </div>
      </section>
    </div>
  );
};

export default Experience;

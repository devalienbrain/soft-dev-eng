import PageTitle from "../../Components/PageTitle/PageTitle";

const Education = () => {
  const title = "Education.";
  const subTitle = "My Academic Achievements and Qualifications";
  return (
    <div className="my-10">
      <PageTitle title={title} subTitle={subTitle}></PageTitle>
      <section className="p-5">
        <div className="flex flex-col gap-5">
          <div className="divider divider-success w-1/4 mx-auto"></div>
          <h5 className="font-medium text-lg">Bachelor in</h5>
          <h2 className=" font-extrabold text-xl">
            Computer Science & Engineering
          </h2>
          <h2 className=" font-bold text-lg text-green-300/25">
            University of Dhaka
          </h2>
          <h2 className=" font-bold text-sm">Passing year: 2020</h2>
        </div>
      </section>
    </div>
  );
};

export default Education;

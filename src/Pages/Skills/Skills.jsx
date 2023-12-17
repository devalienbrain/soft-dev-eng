import { useLoaderData } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { Helmet } from "react-helmet-async";
import SkillCard from "./SkillCard";

const Skills = () => {
  const title = "Skills.";
  const subTitle = "Some skills I possess and have practiced.";

  const skills = useLoaderData() || [];
  // console.log(skills);
  return (
    <div>
      <Helmet>
        <title>Sabbir | Skills</title>
      </Helmet>
      <PageTitle title={title} subTitle={subTitle}></PageTitle>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill}></SkillCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

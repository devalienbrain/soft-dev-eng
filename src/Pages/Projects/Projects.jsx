import { useLoaderData } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { Helmet } from "react-helmet-async";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const title = "Projects.";
  const subTitle = "Details of some projects I've done or still working on.";

  const projects = useLoaderData() || [];

  return (
    <div>
      <Helmet>
        <title>Sabbir | Projects</title>
      </Helmet>
      <PageTitle title={title} subTitle={subTitle}></PageTitle>
      <div>
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

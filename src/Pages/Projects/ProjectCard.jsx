const ProjectCard = ({ project }) => {
  const {
    id,
    websiteName,
    technology,
    details,
    liveSiteLink,
    githubClientCode,
    githubServerCode,
  } = project || [];
  return (
    <>
      <div>
        <div className="w-16 h-16 rounded-full shadow-amber-300 text-black text-xl font-black bg-slate-100/50 mx-auto flex justify-center items-center">
          {id}
        </div>
      </div>
      <div className="card bg-zinc-200/5 rounded-2xl relative flex flex-col md:flex-row p-5">
        <div className="card-body text-left flex flex-col gap-7 flex-1">
          <p>
            Project title:{" "}
            <p className="font-black text-green-600 text-xl">{websiteName}</p>
          </p>
          <p>
            Language/technology used:{" "}
            <p className="font-black text-xl">{technology}</p>
          </p>

          <p>
            Short description of the project:
            <p className="text-xs">{details}</p>
          </p>
        </div>
        <div className="divider divider-success"></div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col gap-5 text-left text-sm text-green-400">
            <a
              href={liveSiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="italic hover:underline"
            >
              click to view live website
            </a>
            <a
              href={githubClientCode}
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-xs hover:underline"
            >
              click to view client side code
            </a>
            {githubServerCode && (
              <a
                href={githubServerCode}
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-xs hover:underline"
              >
                click to view server side code
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

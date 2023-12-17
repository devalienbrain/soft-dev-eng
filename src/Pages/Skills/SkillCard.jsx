const SkillCard = ({ skill }) => {
  const { id, title, details, projectLink } = skill;
  return (
    <div className="card bg-zinc-300/10 rounded-lg relative">
      <div className="card-body text-center flex flex-col gap-7">
        <span className="font-black text-2xl text-green-400 uppercase">
          {title}
        </span>{" "}
        <p className="text-sm">{details}</p>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="italic text-xs hover:underline"
        >
          click to view project
        </a>
        <div className="h-10 w-10 rounded-full absolute -top-3 -right-3 bg-lime-200/50 text-black flex justify-center items-center">
          {id}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

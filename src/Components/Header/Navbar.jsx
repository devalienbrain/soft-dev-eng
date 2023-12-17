import { NavLink } from "react-router-dom";
import { RxSlash } from "react-icons/rx";
const Navbar = () => {
  const links = (
    <>
      <div className="flex justify-between items-center gap-3 md:gap-7 font-bold">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "bg-zinc-400/10 py-2 px-4 rounded-xl"
                : "py-2 px-4"
          }
        >
          <div className="flex justify-center items-center gap-2">
            About
            <span className="border border-zinc-200/50 rounded">
              <RxSlash />
            </span>
          </div>
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "bg-zinc-400/10 py-2 px-4 rounded-xl"
                : "py-2 px-4"
          }
        >
          Resume
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "bg-zinc-400/10 py-2 px-4 rounded-xl"
                : "py-2 px-4"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "bg-zinc-400/10 py-2 px-4 rounded-xl"
                : "py-2 px-4"
          }
        >
          Skills
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
                ? "bg-zinc-400/10 py-2 px-4 rounded-xl"
                : "py-2 px-4"
          }
        >
          Contact
        </NavLink>
      </div>
    </>
  );

  return (
    <div>
      <div className="flex justify-center items-center gap-3 text-xs md:text-sm">
        {links}
      </div>
    </div>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import { IoApps } from "react-icons/io5";
import {
  RiSearchLine,
  RiNotification4Fill,
  RiInformationLine,
} from "react-icons/ri";
import { viewsboards } from "../../data/viewsboards";

export const Boards = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between px-4 py-2 bg-matisse shadow-2xl">
      <div className="flex items-center justify-center">
        <NavLink
          to="/"
          className="hover:bg-[#014a75] p-2 rounded-md transition-colors"
        >
          <IoApps className="text-white text-xl" />
        </NavLink>
        <NavLink
          to="/"
          className="flex items-center justify-center gap-2 px-2 mr-2 hover:bg-[#014a75] p-1 rounded-md transition-colors"
        >
          <img src="/img/logo-manage-white.png" alt="manage" className="w-4" />
          <h2 className="text-xl font-bold text-white">Manage</h2>
        </NavLink>
        <nav>
          <ul className="flex items-center justify-center gap-2">
            {viewsboards.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="flex items-center p-2 text-white hover:bg-[#014a75] transition-colors rounded-md"
                >
                  <p>{link.name}</p>
                  <HiChevronDown />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <NavLink
          to="/create"
          className="p-2 px-4 text-white bg-[#014a75] hover:bg-[#4e97c1] transition-colors rounded-md ml-4"
        >
          Crear
        </NavLink>
      </div>
      {/* Buscar */}
      <div className="flex items-center justify-center gap-2">
        <form action="" className="relative">
          <RiSearchLine className="absolute text-cloud left-2 top-2" />
          <input
            type="text"
            className="bg-white outline-none p-1 pl-8 rounded-md text-cloud"
            placeholder="Buscar"
          />
        </form>
        <NavLink
          to="/"
          className="p-2 rounded-full hover:bg-[#014a75] transition-colors"
        >
          <RiNotification4Fill className="text-white text-2xl" />
        </NavLink>
        <NavLink
          to="/"
          className="p-2 rounded-full hover:bg-[#014a75] transition-colors"
        >
          <RiInformationLine className="text-white text-3xl" />
        </NavLink>
      </div>
    </div>
  );
};

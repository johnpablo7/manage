import { NavLink } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi";
import { views } from "../../data/views";

export const Header = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between px-64 bg-white shadow-2xl">
      <div className="flex items-center justify-center">
        <NavLink to="/" className="flex items-center justify-center gap-2 px-4">
          <img src="/img/logo-manage.png" alt="manage" className="w-5" />
          <h2 className="text-2xl font-bold text-cloud">Manage</h2>
        </NavLink>
        <nav>
          <ul className="flex items-center justify-center gap-2">
            {views.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="flex items-center p-4 text-cloud hover:text-btnblue transition-colors"
                >
                  <p>{link.name}</p>
                  <HiChevronDown />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Login */}
      <div className="flex items-center justify-center">
        <NavLink to="/login" className="text-lg py-4 px-6">
          Iniciar sesión
        </NavLink>
        <NavLink
          to="/signup"
          className="py-4 px-6 bg-btnblue text-white hover:bg-btnhoverblue transition-colors text-lg"
        >
          Obtener Manage gratis
        </NavLink>
      </div>
    </div>
  );
};

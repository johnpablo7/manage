import { NavLink } from "react-router-dom";
import { BsPlayCircle } from "react-icons/bs";

export const Main = () => {
  return (
    <div className="relative w-full h-[600px] bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500">
      <div className="sticky grid grid-cols-1 lg:grid-cols-2 max-w-[1260px] items-center justify-center mx-auto py-20">
        <div>
          <h1 className="text-5xl text-white leading-[4rem] font-semibold mb-2">
            Manage unifica tus tareas, compañeros de equipo y herramientas
          </h1>
          <p className="text-xl text-white mb-8 tracking-[1px]">
            Mantenlo todo en el mismo lugar, aunque tu equipo no lo esté.
          </p>
          <div className="flex items-center justify-between gap-4 mb-8">
            <form className="">
              <input
                type="text"
                className="outline-none py-3 px-4 w-[370px] bg-white text-cloud rounded-md"
                placeholder="Correo electrónico"
              />
            </form>
            <NavLink
              to="/signup"
              className="py-3 px-4 w-[260px] bg-btnblue hover:bg-btnhoverblue text-white rounded-md text-center transition-colors"
            >
              Regístrate, ¡es gratis!
            </NavLink>
          </div>
          <NavLink to="/" className="flex items-center gap-2">
            <p className="text-purple-100 underline underline-offset-1">
              Ver el vídeo
            </p>
            <BsPlayCircle className="text-purple-100 text-2xl" />
          </NavLink>
        </div>
        <div>
          <img src="" alt="img" />
        </div>
      </div>
    </div>
  );
};

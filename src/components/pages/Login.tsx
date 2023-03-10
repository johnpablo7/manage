import { NavLink } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="w-[410px]">
        <NavLink
          to="/"
          className="flex items-center justify-center pt-12 pb-8 gap-2"
        >
          <img src="/img/logo-manage.png" alt="manage" className="w-10 pt-1" />
          <h2 className="text-5xl font-bold text-cloud">Manage</h2>
        </NavLink>

        <div className="flex flex-col items-center justify-center border rounded-md shadow-2xl p-10">
          <h3 className="text-xl text-cloud font-semibold pb-6">
            Iniciar sesión en Manager
          </h3>
          <form action="" className="flex flex-col gap-4 w-full mb-4">
            <input
              type="text"
              className="p-2 outline-none border-[2px] border-gray-200 rounded-md"
              placeholder="Introduce el correo electrónico"
            />
            <input
              type="text"
              className="p-2 outline-none border-[2px] border-gray-200 rounded-md"
              placeholder="Introduce tu contraseña"
            />
          </form>

          <NavLink
            to="/boards"
            className="p-2 text-center bg-[#57aa47] hover:bg-[#61bd4f] text-white w-full rounded-md font-semibold my-2"
          >
            Continuar
          </NavLink>

          <div className="border w-full my-4 border-gray-300"></div>

          <NavLink
            to="/login"
            className="text-sm text-btnblue hover:text-btnhoverblue underline underline-offset-2 mb-2"
          >
            ¿No puede iniciar sesión?
          </NavLink>
          <div className="flex items-center gap-1">
            <div>•</div>
            <NavLink
              to="/login"
              className="text-sm text-btnblue hover:text-btnhoverblue underline underline-offset-2"
            >
              Regístrese para crear una cuenta
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

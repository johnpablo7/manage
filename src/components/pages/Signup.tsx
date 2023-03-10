import { NavLink } from "react-router-dom";

export const Signup = () => {
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
            Regístrate para crear una cuenta
          </h3>
          <form action="" className="flex flex-col gap-4 w-full">
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
            <input
              type="text"
              className="p-2 outline-none border-[2px] border-gray-200 rounded-md"
              placeholder="Confirmar contraseña"
            />
          </form>
          <p className="text-pgray text-sm text-justify py-6">
            Al hacer clic en Continuar a continuación, aceptas las
            <span className="text-btnblue hover:text-btnhoverblue underline underline-offset-2 px-1">
              Condiciones del servicio de Atlassian Cloud
            </span>
            de Atlassian y la
            <span className="text-btnblue hover:text-btnhoverblue underline underline-offset-2 px-1">
              Política de privacidad
            </span>
            .
          </p>
          <NavLink
            to="/login"
            className="p-2 text-center text-pgray bg-violet-100 hover:bg-btnblue hover:text-white w-full rounded-md font-semibold mb-4 transition-colors"
          >
            Continuar
          </NavLink>
          <NavLink to="/login">
            <span className="text-sm text-btnblue hover:text-btnhoverblue underline underline-offset-2 px-1">
              ¿Ya tienes una cuenta? Inicia sesión
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

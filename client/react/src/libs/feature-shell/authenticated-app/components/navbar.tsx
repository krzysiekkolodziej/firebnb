import { logoWhite } from "public/assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogout } from "../../../feature-data-access-api/auth";
import { IconLogout } from "../../../utils/icons/logout";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mutate: logout } = useLogout();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="w-full z-10 absolute top-0 left-0 p-10 flex items-center justify-between text-white text-md">
      <img
        src={logoWhite}
        onClick={() => navigate("/")}
        className="w-32 hover:opacity-80 cursor-pointer"
      />
      <div className="flex gap-10">
        <button
          onClick={() => navigate("/my-hotels")}
          className={`hover:opacity-80 ${
            location.pathname !== "/my-hotels" && "opacity-60"
          }`}
        >
          My Hotels
        </button>
        <button
          onClick={() => navigate("/my-reservations")}
          className={`hover:opacity-80 ${
            location.pathname !== "/my-reservations" && "opacity-60"
          }`}
        >
          My Reservations
        </button>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-1 hover:opacity-80"
      >
        <IconLogout size={28} />
        <p>Logout</p>
      </button>
    </div>
  );
};

export default Navbar;

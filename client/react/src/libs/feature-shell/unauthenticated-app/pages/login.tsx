import { hotelRoom, logoIcon } from "@firebnb/public/assets";

export const Login = () => {
  return (
    <div className="bg-blue-400 w-full flex">
      <div className="w-1/2 flex flex-col space-y-2">
        <img src={logoIcon} />
      </div>
      <div className="w-1/2">
        <img src={hotelRoom} />
      </div>
    </div>
  );
};

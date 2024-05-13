import { hotelRoom } from "public/assets";
import { Navbar } from "../components";

export const MyReservations = () => {
  return (
    <>
      <div className="relative bg-black">
        <Navbar />
        <img
          src={hotelRoom}
          className="w-screen h-[7.5rem] object-cover object-center opacity-50"
        />
      </div>
    </>
  );
};

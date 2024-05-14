import { hotelRoom } from "public/assets";
import { styles } from "public/styles";
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
      <div className="bg-white p-10">
        <p className={styles.heading}>My Reservations</p>
        <div className="flex flex-col space-y-2 pt-5">
          {myReservations?.map((reservation: ReservationType, index: number) => (
            <div
              key={index}
              className={`flex items-center justify-between ${
                index !== myBnbs?.length - 1 && "border-b border-stone-200"
              }`}
            >
              <div className="py-1 flex space-x-8">
                <div className="flex flex-col">
                  <p className={`${styles.paragraph2} text-stone-400`}>
                    Address
                  </p>
                  <p className={styles.paragraph}>{bnb?.address}</p>
                </div>
                <div className="flex flex-col">
                  <p className={`${styles.paragraph2} text-stone-400`}>Space</p>
                  <p className={styles.paragraph}>
                    {bnb?.space} m<sup>2</sup>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className={`${styles.paragraph2} text-stone-400`}>Cost</p>
                  <p className={styles.paragraph}>{bnb?.cost} pln/night</p>
                </div>
                <div className="flex flex-col">
                  <p className={`${styles.paragraph2} text-stone-400`}>
                    Updated
                  </p>
                  <p className={styles.paragraph}>
                    {moment(bnb?.updatedAt).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
};

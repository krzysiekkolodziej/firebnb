import moment from "moment";
import { hotelRoom } from "public/assets";
import { styles } from "public/styles";
import {
  useDeleteReservation,
  useUserReservations,
} from "../../../feature-data-access-api/reservation";
import { IconDelete } from "../../../utils/icons";
import { ReservationType } from "../../../utils/types";
import { Navbar } from "../components";

export const MyReservations = () => {
  const { data: myReservations } = useUserReservations();
  const { mutate: deleteReservation } = useDeleteReservation();

  console.log(myReservations);

  const handleDeleteReservation = async (reservation: ReservationType) => {
    await deleteReservation(reservation?.id);
  };

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
          {myReservations?.data?.map(
            (reservation: ReservationType, index: number) => (
              <div
                key={index}
                className={`grid grid-cols-[5fr_1fr] place-items-center justify-items-end ${
                  index !== myReservations?.data?.length - 1 &&
                  "border-b border-stone-200"
                }`}
              >
                <div className="py-1 grid gap-2 grid-cols-[4fr_2fr_2fr_2fr] w-full">
                  <div className="flex flex-col">
                    <p className={`${styles.paragraph2} text-stone-400`}>
                      Address
                    </p>
                    <p className={styles.paragraph}>
                      {reservation?.bnb?.address}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className={`${styles.paragraph2} text-stone-400`}>
                      Space
                    </p>
                    <p className={styles.paragraph}>
                      {reservation?.bnb?.space} m<sup>2</sup>
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className={`${styles.paragraph2} text-stone-400`}>
                      Cost
                    </p>
                    <p className={styles.paragraph}>
                      {reservation?.bnb?.cost} pln/night
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className={`${styles.paragraph2} text-stone-400`}>
                      Updated
                    </p>
                    <p className={styles.paragraph}>
                      {moment(reservation?.updatedAt).fromNow()}
                    </p>
                  </div>
                </div>
                <button
                  className="text-primary pt-2"
                  onClick={() => handleDeleteReservation(reservation)}
                >
                  <IconDelete />
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

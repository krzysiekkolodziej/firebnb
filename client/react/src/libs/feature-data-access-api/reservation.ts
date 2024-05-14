import { useMutation } from "@tanstack/react-query";
import { reservationInfoType } from "../utils/types";
import { client } from "./utils";

export function useCreateReservation() {
  return useMutation({
    mutationFn: (reservationInfo: reservationInfoType) =>
      client("reservation/create", {
        method: "POST",
        data: reservationInfo,
      }),
  });
}

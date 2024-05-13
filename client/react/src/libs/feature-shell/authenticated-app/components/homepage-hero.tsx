import { useForm } from "react-hook-form";
import {
  IconAddress,
  IconCoin,
  IconMeasure,
  IconSearch,
} from "../../../utils/icons";
import { BnbsSearchType } from "../../../utils/types";
import { InputControl } from "../../unauthenticated-app/components/input-control";

interface HomepageHeroProps {
  onSearch: (formData: BnbsSearchType) => void;
}
export const HomepageHero = ({ onSearch }: HomepageHeroProps) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (formData: BnbsSearchType) => {
    onSearch(formData);
  };

  return (
    <div className="z-10 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-5 text-center">
      <div className="flex flex-col text-white font-normal text-5xl tracking-widest">
        FIND YOUR FAVOURITE{" "}
        <span className="text-6xl font-bold ">HOTEL FOR STAY</span>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="p-3 flex space-x-4 bg-white rounded-lg w-fit mx-auto">
          <div className="flex flex-col">
            <div className="flex gap-2">
              <IconAddress />
              <p>Address</p>
            </div>
            <InputControl
              fieldErrorMessage={false}
              control={control}
              name="address_like"
            />
          </div>
          <div className="flex flex-col w-40">
            <div className="flex gap-2">
              <IconCoin />
              <p>Cost (min/max)</p>
            </div>
            <div className="flex gap-1">
              <InputControl
                fieldErrorMessage={false}
                control={control}
                name="min_cost"
              />
              <InputControl
                fieldErrorMessage={false}
                control={control}
                name="max_cost"
              />
            </div>
          </div>
          <div className="flex flex-col w-40">
            <div className="flex gap-2">
              <IconMeasure />
              <p>Space (min/max)</p>
            </div>
            <div className="flex gap-1">
              <InputControl
                fieldErrorMessage={false}
                control={control}
                name="min_space"
              />
              <InputControl
                fieldErrorMessage={false}
                control={control}
                name="max_space"
              />
            </div>
          </div>
          <button type="submit" className="text-white hover:opacity-80">
            <IconSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

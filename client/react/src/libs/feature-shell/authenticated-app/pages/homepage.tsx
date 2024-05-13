import moment from "moment";
import { hotelRoom } from "public/assets";
import { styles } from "public/styles";
import { useState } from "react";
import { useBnbs } from "../../../feature-data-access-api/bnb";
import { BnbType, BnbsSearchType } from "../../../utils/types";
import { Button } from "../../unauthenticated-app/components/button";
import { HomepageHero, Navbar } from "../components";

export const Homepage = () => {
  const [searchCriteria, setSearchCriteria] = useState<BnbsSearchType>({});
  const { data: bnbs } = useBnbs(searchCriteria);

  const handleSearch = (searchParams: BnbsSearchType) => {
    setSearchCriteria(searchParams);
  };
  const handleBookMeClicked = (bnb: BnbType) => {
    console.log("Book me clicked", bnb);
  };
  return (
    <>
      <div className="relative bg-black">
        <Navbar />
        <HomepageHero onSearch={handleSearch} />
        <img
          src={hotelRoom}
          className="w-screen h-screen object-cover object-bottom opacity-50"
        />
      </div>
      <div className="bg-white p-10">
        <p className={styles.heading}>All Hotels</p>
        <div className="flex flex-col space-y-2 pt-5">
          {bnbs?.map((bnb: BnbType, index: number) => (
            <div
              key={index}
              className={`flex items-center justify-between ${
                index !== bnbs?.length - 1 && "border-b border-stone-200"
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
              <Button
                variant="primary-inverted"
                onClick={() => handleBookMeClicked(bnb)}
                className=""
              >
                Book me!
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

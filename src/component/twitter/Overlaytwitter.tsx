import { useEffect, useState } from "react";

import Cellule from "./Cellule";

import { TwitterResponse } from "../../helpers/propsType/TwitterResponse";
import { twi_response } from "../../helpers/sample/twitter";

const Overlaytwitter = () => {
  const [getHashtag, setGetHashtag] = useState<TwitterResponse | null>(
    twi_response
  );

  const [celluleHeight, setCelluleHeight] = useState<number>(0);

  useEffect(() => {
    setGetHashtag(twi_response);
    console.log(getHashtag);
  }, []);

  return (
    <section
      id="twitter-embedded"
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "65vh",
        overflowY: "hidden",
        margin: "auto",
        width: "40%",
        justifyContent: "space-between",
        background:
          "linear-gradient(180deg, rgba(7,9,17,1) 0%, rgba(50,70,89,1) 60%, rgba(52,73,93,1) 100%)",
        borderRadius: "25px",
        padding: "0.5em",
      }}
    >
      {getHashtag &&
        getHashtag.data!.map((item, index) => {
          /* console.log("item", item);
          console.log("index", index); */
          const userData = getHashtag.includes.users![index];
          return (
            <Cellule
              key={index}
              tweetData={item}
              userData={userData}
              setCelluleHeight={setCelluleHeight}
              celluleHeight={celluleHeight * (getHashtag.data!.length / 2)}
            />
          );
        })}
    </section>
  );
};

export default Overlaytwitter;

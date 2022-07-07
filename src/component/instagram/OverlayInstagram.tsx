import { useEffect, useState } from "react";

import Cellule from "./Cellule";

import { TwitterResponse } from "../../helpers/propsType/TwitterResponse";
import { twi_response } from "../../helpers/sample/twitter";

const Overlaytwitter = () => {
  const [getHashtag, setGetHashtag] = useState<TwitterResponse | null>(
    twi_response
  );

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
        background: "white",
        borderRadius: "25px",
        padding: "0.5em",
      }}
    >
      {getHashtag &&
        getHashtag.data!.map((item, index) => {
          console.log("item", item);
          console.log("index", index);
          const userData = getHashtag.includes.users![index];
          return <Cellule key={index} tweetData={item} userData={userData} />;
        })}
    </section>
  );
};

export default Overlaytwitter;

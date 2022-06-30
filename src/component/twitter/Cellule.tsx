import {
  DataEntity,
  UsersEntity,
} from "../../helpers/propsType/TwitterResponse";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
type AppProps = {
  tweetData: DataEntity;
  userData: UsersEntity;
  setCelluleHeight: any;
  celluleHeight: any;
};

const Cellule = ({
  tweetData,
  userData,
  setCelluleHeight,
  celluleHeight,
}: AppProps) => {
  const celluleRef = useRef<HTMLDivElement>(null);
  /* console.log("Cellule", tweetData);
  console.log("Cellule", userData); */

  const getMinutesSinceNow = (created_at: string) => {
    //Get the number of minutes since the tweet was created
    const date = new Date(created_at);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    return minutes;
  };

  useEffect(() => {
    console.log("celluleHeightTwi", celluleHeight);
    setCelluleHeight(celluleRef.current!.clientHeight);
  }, []);

  return (
    <motion.div
      className="celluleTwitter text-white d-flex flex-column"
      style={{
        width: "45%",
        margin: "0.5em",
        padding: "0.5em",
        minHeight: "20%",
        backgroundColor: "#232932",
      }}
      animate={{ y: -celluleHeight }}
      transition={{ /* repeat: Infinity, ease: "easeInOut", */ duration: 25 }}
      ref={celluleRef}
    >
      {userData && tweetData && (
        <>
          <div className="header-cellule d-flex justify-content-between">
            <div className="cellule-name d-flex justify-content-around">
              <div>
                <img
                  src={userData.profile_image_url}
                  alt={"Photo de profil de " + userData.username}
                  className="rounded-circle"
                />
              </div>
              <div>
                <p style={{ margin: "auto", marginLeft: "0.5em" }}>
                  {userData.name}
                </p>
                <p style={{ margin: "auto", marginLeft: "0.5em" }}>
                  @{userData.username}
                </p>
              </div>
            </div>
            <p>{getMinutesSinceNow(userData.created_at)}min</p>
          </div>
          <p style={{ paddingTop: "0.5em", paddingBottom: "0.5em" }}>
            {tweetData.text}
          </p>
        </>
      )}
    </motion.div>
  );
};

export default Cellule;

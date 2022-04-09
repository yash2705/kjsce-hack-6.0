import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import { query, collection, where, getDocs } from "firebase/firestore";
import db from "../firebase.config";

const Hero = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  useEffect(() => {
    findUser();
  }, [isAuthenticated]);

  const findUser = async () => {
    if (isAuthenticated) {
      console.log(user);
      const walletAddress = user.get("ethAddress").toString();
      const q = query(
        collection(db, "users"),
        where("walletAddress", "==", walletAddress)
      );

      const querySnapshot = await getDocs(q);
      if (querySnapshot.size === 1) return console.log(user);

      return console.log("No user found");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.largeFont}>MEDI-CHAIN</div>
      <div className={styles.mediumFont}>
        Save all your medical reports at one place.
      </div>
      <div className={styles.container} onClick={authenticate}>
        Connect Wallet
      </div>
    </div>
  );
};

const styles = {
  wrapper: `flex flex-col items-center justify-center items-center text-center space-y-6 bg-slate-100 pt-10`,
  container: ` rounded-full text-white drop-shadow-lg text-xl w-1/3 sm:w-1/4 lg:w-1/5 sm:hover:scale-105 transition duration-500 ease-in-out bg-black hover:cursor-pointer py-4 text-center`,
  largeFont: `text-6xl w-4/5 md:w-2/5 font-bold`,
  mediumFont: `text-2xl w-4/5 lg:w-2/5`,
};

export default Hero;

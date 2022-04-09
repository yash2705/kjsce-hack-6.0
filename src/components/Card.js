<<<<<<< HEAD
import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

const styles = {
  wrapper: ` space-y-2 p-4 sm:hover:scale-105 transition duration-500 ease-in-out bg-white rounded-2xl shadow-md h-full `,
  image: `w-12`,
  title: `text-2xl font-medium text-black`,
  description: `text-black`,
=======
import ArticleIcon from "@mui/icons-material/Article";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const Card = () => {
  return <Box sx={{ p: 3, bgcolor: "black" }}></Box>;
>>>>>>> 0253f73760fce326f6ec58ac5dd47a89cf97afd6
};

export default Card;

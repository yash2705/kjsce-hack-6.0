import ArticleIcon from "@mui/icons-material/Article";
import { Box } from "@mui/material";
import React from "react";

const Card = () => {
  return (
    <Box sx={{ p: 3, bgcolor: "black" }}>
      <ArticleIcon sx={{ color: "white" }} />
    </Box>
  );
};

export default Card;

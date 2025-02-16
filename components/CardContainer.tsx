import React from "react";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

const CardContainer = () => {
  return (
    <Box className="flex flex-wrap gap-12 justify-center items-center p-8 m-8">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Box>
  );
};

export default CardContainer;

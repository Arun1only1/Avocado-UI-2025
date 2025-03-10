import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <Box
      className="w-[400px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden bg-gradient-to-b from-white to-gray-100"
      sx={{
        "&:hover": {
          transform: "translateY(-5px)",
          transition: "transform 0.3s ease-in-out",
        },
      }}
    >
      <Image
        className="cursor-pointer hover:opacity-90 transition-opacity duration-300 ease-in-out"
        src="/mouseImage.webp"
        height={400}
        width={400}
        alt="Product title"
      />

      <Stack className="p-6 space-y-4">
        <Box className="flex justify-between items-center">
          <Typography variant="h5" className="font-bold text-gray-800">
            Mouse
          </Typography>
          <Chip label="Ugreen" color="warning" className="font-bold" />
        </Box>
        <Typography variant="h6" className=" text-gray-700">
          Price:
          <span className="ml-2 text-green-500 hover:text-green-700">$20</span>
        </Typography>
        <Typography className="text-lg text-gray-600 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          sequi tempora expedita quaerat quia, dignissimos quasi veniam est
          mollitia ipsa autem. Nesciunt tempore pariatur atque perspiciatis
          sapiente saepe quae...
        </Typography>
        <Button
          variant="contained"
          color="warning"
          className="w-full py-2 font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300 ease-in-out"
        >
          Explore
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductCard;

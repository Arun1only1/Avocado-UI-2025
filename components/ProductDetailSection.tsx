import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteProductDialog from "./DeleteProductDialog";

const ProductDetailSection: React.FC = () => {
  return (
    <Box className="flex gap-8 w-[80%] shadow-2xl p-8 ">
      <Box className="w-[50%] flex justify-center items-center">
        <Image
          className="cursor-pointer hover:opacity-90 transition-opacity duration-300 ease-in-out"
          src="/mouseImage.webp"
          height={400}
          width={800}
          alt="Product title"
        />
      </Box>
      <Box className="flex flex-col items-start gap-4 w-[50%]">
        <Typography variant="h5">Mouse</Typography>
        <Chip label="Fantech" color="secondary" />
        <Typography variant="h6">Price: $20</Typography>
        <Typography variant="h6">Available Quantity: 90</Typography>
        <Chip label="Electronics" color="secondary" />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Free Shipping"
        />
        <Typography className="text-base text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
          blanditiis laudantium porro. Error quasi quis laborum enim! Odio
          recusandae, voluptatem, explicabo earum et officia impedit similique
          unde voluptas omnis aliquam neque tempora vitae, quia quasi magni!
          Eaque iste tempore eos velit cumque, quia culpa iusto amet voluptate!
          Architecto sapiente delectus in molestiae. Vel repudiandae est
          reprehenderit maxime aliquam consequatur porro? Perferendis nesciunt
          neque aliquid quo officia maxime rem dignissimos, quas quibusdam vel
          labore iure optio perspiciatis ut natus eveniet beatae repudiandae
          accusantium vitae magnam eligendi, sint soluta? Natus voluptatem
          aliquid excepturi recusandae. Laborum sequi distinctio itaque
          perspiciatis harum et modi!
        </Typography>

        <Box className="w-full flex justify-between  gap-8">
          <Button
            fullWidth
            variant="contained"
            color="warning"
            startIcon={<EditIcon />}
          >
            Edit
          </Button>

          <DeleteProductDialog />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailSection;

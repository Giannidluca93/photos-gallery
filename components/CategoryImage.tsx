import { FC } from "react";
import Image from "next/image";

import Box from "@mui/material/Box";

interface Props {
  image: string;
}

const CategoryImage: FC<Props> = ({ image }) => {
  return (
    <Box key={image} m={2} sx={{ cursor: "pointer" }}>
      <Image src={image} height={150} width={150} alt="category image" />
    </Box>
  );
};

export default CategoryImage;

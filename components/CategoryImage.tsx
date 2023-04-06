import { FC } from "react";
import Image from "next/image";

import Box from "@mui/material/Box";

import { useModal } from "hooks/useModal";

interface Props {
  image: string;
}

const CategoryImage: FC<Props> = ({ image }) => {
  const { open, toggleModal } = useModal();
  return (
    <Box
      key={image}
      m={2}
      sx={{ cursor: "pointer" }}
      onClick={() => toggleModal(open)}
    >
      <Image src={image} height={150} width={150} alt="category image" />
    </Box>
  );
};

export default CategoryImage;

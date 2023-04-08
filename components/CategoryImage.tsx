import { FC } from "react";
import Image from "next/image";

import Box from "@mui/material/Box";

import CategoryModal from "./CategoryModal";

import { useModal } from "hooks/useModal";

interface Props {
  image: string;
}

const CategoryImage: FC<Props> = ({ image }) => {
  const { open, toggleModal } = useModal();
  return (
    <Box key={image} m={2} sx={{ cursor: "pointer" }}>
      <Image
        src={image}
        height={150}
        width={150}
        alt="category image"
        onClick={() => toggleModal(open)}
      />
      <CategoryModal image={image} />
    </Box>
  );
};

export default CategoryImage;

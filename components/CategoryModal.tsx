import { FC } from "react";

import Image from "next/image";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

import { useModal } from "hooks/useModal";

interface Props {
  image: string;
}

const CategoryModal: FC<Props> = ({ image }) => {
  const { open, toggleModal } = useModal();

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box height="100%" display="flex" p={5} sx={{ outline: "none" }}>
        <CloseIcon
          onClick={() => toggleModal(open)}
          sx={{ color: "#fff", cursor: "pointer", scale: "2" }}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Image src={image} height={600} width={600} alt="category image" />
        </Box>
      </Box>
    </Modal>
  );
};

export default CategoryModal;

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import { useModal } from "hooks/useModal";

const CategoryModal = () => {
  const { open, toggleModal } = useModal();

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          This is a modal <p onClick={() => toggleModal(open)}>x</p>
        </Typography>
      </Box>
    </Modal>
  );
};

export default CategoryModal;

import { FC } from "react";

import Image from "next/image";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { ICategory } from "interfaces";

interface Props {
  category: ICategory;
}

const Category: FC<Props> = ({ category }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image
          src={category.profileImg}
          alt={category.title}
          width={150}
          height={150}
        />
        <Typography>{category.title}</Typography>
      </Box>
    </Grid>
  );
};

export default Category;

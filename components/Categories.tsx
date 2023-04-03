import { FC } from "react";

import { ICategory } from "interfaces";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

interface Props {
  categories: ICategory[];
}

const Categories: FC<Props> = ({ categories }) => {
  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
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
      ))}
    </Grid>
  );
};

export default Categories;

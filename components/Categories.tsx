import { FC } from "react";

import { ICategory } from "interfaces";

import Grid from "@mui/material/Grid";
import Category from "./Category";

interface Props {
  categories: ICategory[];
}

const Categories: FC<Props> = ({ categories }) => {
  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Category key={category.title} category={category} />
      ))}
    </Grid>
  );
};

export default Categories;

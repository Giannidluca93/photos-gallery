import { FC } from "react";

import Image from "next/image";
import NextLink from "next/link";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import { ICategory } from "interfaces";

interface Props {
  category: ICategory;
}

const Category: FC<Props> = ({ category }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <NextLink href={`/categories/${category.slug}`} passHref legacyBehavior>
          <Link color="text.secondary">
            <Image
              src={category.profileImg}
              alt={category.title}
              width={150}
              height={150}
            />
            <Typography variant="subtitle1" align="center">
              {category.title}
            </Typography>
          </Link>
        </NextLink>
      </Box>
    </Grid>
  );
};

export default Category;

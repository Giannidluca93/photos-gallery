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
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        m={2}
        flexWrap="wrap"
      >
        <NextLink href={`/categories/${category.slug}`} passHref legacyBehavior>
          <Link color="text.secondary">
            <Box
              position="relative"
              sx={{
                height: { xs: "180px", xl: "300px" },
                width: { xs: "180px", xl: "300px" },
              }}
            >
              <Image src={category.profileImg} alt={category.title} fill />
            </Box>

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

import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { AxiosResponse } from "axios";

import { axiosInstance } from "api/api";

import { MainLayout } from "@/components/layouts";
import CategoryImage from "@/components/CategoryImage";

import { ICategory } from "interfaces";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CategoryModal from "@/components/CategoryModal";

interface Props {
  category: ICategory;
}

const CategoryPage: NextPage<Props> = ({ category }) => {
  return (
    <MainLayout
      title={`Category: ${category.title}`}
      pageDescription={"Category images"}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={{ textTransform: "capitalize" }}>
            <Typography align="center" variant="h2" component="h2">
              {category.title}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            {category.images.map((image) => {
              return <CategoryImage key={image} image={image} />;
            })}
          </Box>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const categoriesSlugs: AxiosResponse<string[]> = await axiosInstance.get(
    "/slugs"
  );

  return {
    paths: categoriesSlugs.data.map((slug) => {
      return {
        params: {
          slug,
        },
      };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const categories: AxiosResponse<ICategory[]> = await axiosInstance.get(
    "/categories"
  );

  const category = categories.data.find((category) => category.slug === slug);

  if (!category) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      category,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default CategoryPage;

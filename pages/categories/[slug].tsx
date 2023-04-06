import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { AxiosResponse } from "axios";

import { MainLayout } from "@/components/layouts";

import { axiosInstance } from "api/api";

import { ICategory } from "interfaces";

interface Props {
  category: ICategory;
}

const CategoryPage: NextPage<Props> = ({ category }) => {
  return (
    <MainLayout title={`Category: test`} pageDescription={"Category images"}>
      <h1>{category.title}</h1>
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

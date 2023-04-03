import { GetServerSideProps, NextPage } from "next";

import { MainLayout } from "@/components/layouts";
import Categories from "@/components/Categories";

import { axiosInstance } from "api/api";

import { ICategory } from "interfaces";

interface Props {
  categories: ICategory[];
}

const Home: NextPage<Props> = ({ categories }) => {
  return (
    <MainLayout
      title={"Photo Gallery - Home"}
      pageDescription={"Photos categories"}
    >
      <Categories categories={categories} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categories = await axiosInstance.get("/categories");
  return {
    props: {
      categories: categories.data,
    },
  };
};

export default Home;

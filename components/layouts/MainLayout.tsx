import Head from "next/head";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const MainLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

        {/* this is used by socialmedia */}
        <meta name="og:title" content={title} />
        <meta name="og:descrition" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>
      {/* <nav>navbar</nav> */}
      {/* sidemenu */}
      <main>{children}</main>
      <footer>{/* todo custom footer */}</footer>
    </>
  );
};

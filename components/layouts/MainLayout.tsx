import { FC, ReactNode } from "react";

import Head from "next/head";
import NextLink from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

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

      <Box display="flex" flexDirection="column" height="100vh">
        <Box>
          {" "}
          <AppBar position="static">
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" justifyContent="flex-end">
                <Toolbar>
                  <NextLink href="/" passHref legacyBehavior>
                    <Link>Home</Link>
                  </NextLink>
                </Toolbar>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Toolbar>
                  <NextLink href="/about" passHref legacyBehavior>
                    <Link>About</Link>
                  </NextLink>
                </Toolbar>
              </Box>
            </Box>
          </AppBar>
        </Box>
        <Box flexGrow="1">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}
          >
            {children}
          </Box>{" "}
        </Box>
        <Box>Footer</Box>
      </Box>
    </>
  );
};
